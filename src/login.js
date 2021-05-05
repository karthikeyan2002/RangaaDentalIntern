import React from "react";
import "./Styles/login.css";
import logo from "./img/logo.png";

function login() {
  return (
    <div>
      <div className="login">
        <div className="login-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,224L60,240C120,256,240,288,360,298.7C480,309,600,299,720,277.3C840,256,960,224,1080,181.3C1200,139,1320,85,1380,58.7L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
          <label>
            <input type="text" name="username" placeholder="Enter User Name" />
          </label>
          <br />
          
          <label>
            <input type="password" name="password" placeholder="Enter Password" />
          </label>
          <br />

          <button type="submit" className="btn">
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}

export default login;
