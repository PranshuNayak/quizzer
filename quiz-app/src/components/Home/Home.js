import React from "react";
import logo from "../../images/1.png";
import GoogleAuth from "../Auth/GoogleAuth";
import "./style.css";
function Home() {
  return (
    <div className="row vh-100 justify-content-center align-items-center">
      <div className="col-3">
        <div className="row vh-100">
          <div className="col-12 logo-container p-2">
            <img src={logo} alt="logo" className="logo" />
            <div className="col-12 text-center h3">
              Log in to your account
              <div className="text-center my-4">
                <GoogleAuth />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-9 home p-5">
        <div className="row text-light">
          <div className="col-7 my-2 h3">
            Deliver App Search Fast with Atlas Search
          </div>
          <div className="col-7 h5 my-2">
            Build rich full-text search features into your applications without
            syncing your database to a separate search engine.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
