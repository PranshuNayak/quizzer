import React from "react";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Quiz from "../Quiz/Quiz";
import Home from "./Home";
function Profile() {
  return (
    <div className="row justify-content-center align-items-center">
      <div className="col-12 h-25">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="quizzes" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default Profile;
