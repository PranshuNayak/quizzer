import React, { useState } from "react";
import axios from 'axios'
import { decodeToken } from "react-jwt";
import { useNavigate } from "react-router-dom";


function GoogleRedirect() {
  const navigate = useNavigate()
  const [role,setRole] = useState('Student')
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        const api_response = await axios.post(`${process.env.REACT_APP_BACKENDURL}/authenticate/register`,{
            token:localStorage.getItem('token'),
            type:role
        })
        localStorage.removeItem('token')
        localStorage.setItem('token',api_response.data)
        const data = decodeToken(api_response.data);
        console.log(data)
        if(data.type==="Teacher")
        navigate('/profile/educator')
        else navigate('/profile/student')
    } catch (error) {
        navigate('/')
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">Registration</div>
        <div className="col-12">Select your role</div>
        <form onSubmit={handleSubmit}>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="Role"
              value='Teacher'
              onChange={(e)=>{setRole(e.target.value)}}
            />
            <label className="form-check-label" for="Teacher1">
              Teacher
            </label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="Role"
              value='Student'
              onChange={(e)=>{setRole(e.target.value)}}
            />
            <label className="form-check-label" for="Student">
              Student
            </label>
          </div>
        </div>

        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
        </form>

      </div>
    </div>
  );
}

export default GoogleRedirect;
