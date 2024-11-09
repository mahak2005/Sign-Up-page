import React, { useEffect, useState } from "react";
// import Image from "../assets/image.png";
import Logo from "../assets/logo.png";
// import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');

  const handleRoleClick = (role) => {
    setSelectedRole(role);
  };

  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Logo} alt="" />
        <h1>AQUANIDHI</h1>
        <p>The Ultimate Fisheries Data Hub of India</p>
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="login-center">
            <h2>AquaNidhi</h2>
            <p>The Ultimate Fisheries Data Hub of India</p>

            <div className="role-selection">
              <button
                className={`role-button ${selectedRole === 'admin' ? 'selected' : ''}`}
                onClick={() => handleRoleClick('admin')}
              >
                Admin
              </button>
              <button
                className={`role-button ${selectedRole === 'user' ? 'selected' : ''}`}
                onClick={() => handleRoleClick('user')}
              >
                User
              </button>
            </div>

            <form>
              <input type="email" placeholder="Email" />
              <div className="pass-input-div">
                <input type={showPassword ? "text" : "password"} placeholder="Password" />
                {showPassword ? <FaEyeSlash onClick={() => {setShowPassword(!showPassword)}} /> : <FaEye onClick={() => {setShowPassword(!showPassword)}} />}
              </div>

              <div className="login-center-options">
                <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">
                    Remember for 30 days
                  </label>
                </div>
                <a href="#" className="forgot-pass-link">
                  Forgot password?
                </a>
              </div>
              <div className="login-center-buttons">
                <button type="button">Log In</button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Don't have an account? <a href="Login.jsx">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
