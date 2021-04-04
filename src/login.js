import React from "react";
import "./login.css";
import logo from "./images.png";

function login() {
  return (
    <div>
      <div className="login">
        <div className="login-container">
          <img
            src={logo}
          ></img>
          <p>Admin Login</p>
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
