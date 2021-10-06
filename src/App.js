import React from "react";
// import Signup from "./components/signup/Signup";
import "./App.css";
import LSideBar from "./components/lsidebar";
import Nav from "./components/navbar/Navi";
import PostBase from "./components/Post/PostBase";
import RSideBar from "./components/rsidebar";

import image from './assets/img/img1.jpg'
import Profile from "./pages/bucket/Profile";
import Login from "./components/login/Login";

function App() {
  return (
    <div className="bg-white">
    <Login />
    </div>
  );
}

export default App;
