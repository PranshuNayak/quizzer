import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../images/logo.png";
import GoogleAuth from "../Auth/GoogleAuth";
function Sidebar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="dashboard">
          <img
            className="profile-image"
            referrerPolicy="no-referrer"
            src={logo}
            alt="logo"
          />
          <span className="d-inline-block mx-2">Quizzer</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <GoogleAuth />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
