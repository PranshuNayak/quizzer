import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import env from "react-dotenv";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "react-jwt";
import "./style.css";
import Spinnner from "../Alert/Spinner";

function GoogleAuth() {
  let [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const responseGoogle = async (response) => {
    setLoading(true)
    try {
      const api_response = await axios.post(
        `${env.REACT_APP_BACKEND_URL}/authenticate`,
        {
          id_token: response.tokenId,
        }
      );
      localStorage.setItem("token", api_response.data);
      const data = decodeToken(api_response.data);
      console.log(data)
      console.log(api_response)
      if (api_response.status === 200) {
        if (data.type === "Teacher") {
          localStorage.setItem("type", "Teacher");
          navigate("/profile/educator");
        } else {
          localStorage.setItem("type", "Student");
          navigate("/profile/student");
        }
      } else navigate("/auth/register");
    } catch (error) {
      alert("Login/Signup failed");
      // redirect to home with error
      navigate("/");
    }
    setLoading(false)
  };
  return (
    <>
      {loading ? (
        <Spinnner/>
      ) : (
        <GoogleLogin
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className="btn btn-dark w-100"
            >
              Google
            </button>
          )}
          clientId={
            env.REACT_APP_GOOGLE_CLIENT_ID
          }
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      )}
    </>
  );
}

export default GoogleAuth;
