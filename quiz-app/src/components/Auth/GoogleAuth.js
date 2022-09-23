import React from "react";
import { GoogleLogin } from "react-google-login";
import env from "react-dotenv";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "react-jwt";

import './style.css'
function GoogleAuth() {
  const navigate = useNavigate();
  const responseGoogle = async (response) => {
    try {
      const api_response = await axios.post(
        `${process.env.REACT_APP_BACKENDURL}/authenticate`,
        {
          id_token: response.tokenId,
        }
      );
      localStorage.setItem("token", api_response.data);
      const data = decodeToken(api_response.data);
      if (api_response.status === 200) {
        if (data.type === "Teacher") navigate("profile/educator");
        else navigate("profile/student");
      } else navigate("/auth/register");
    } catch (error) {
      alert('Login/Signup failed')
      // redirect to home with error
      navigate('/')
    }
  };
  return (
    <GoogleLogin
      render={(renderProps) => (
        <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="btn btn-dark w-100">
          Google
        </button>
      )}
      clientId={env.GOOGLE_CLIENT_ID}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
}

export default GoogleAuth;
