// import React from "react";
import './RealEstate.css';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [details, setDetails] = useState({
    UserId: "",
    Password: "",
  });
  useEffect(() => {
    console.log(details.UserId, details.Password);
  });
  const navigate = useNavigate();
  const PropertyListingPage = ()=>{
    navigate("/propertyListingPage");
  }



  return (
    <div className="container">
      <div className="login">
        <img
          id="logo"
          className="login-items"
          alt="logo"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/88975523945059.5632b7d5654ae.png"
        />
        <span id="credential-signin" className="login-items">
          Enter your credentials to access your account
        </span>
        <input
          type="text"
          id="userid"
          value={details.UserId}
          onChange={(e) => setDetails({ ...details, UserId: e.target.value })}
          className="login-items"
          placeholder="         User ID"
        />
        <input
          type="password"
          value={details.Password}
          onChange={(e) => setDetails({ ...details, Password: e.target.value })}
          className="login-items"
          placeholder="         Password"
        />
        <button id="signin" className="login-items" onClick={PropertyListingPage}>
          Sign In
        </button>
        <Link to="/signup" id="link">
          <span id="signup" className="login-items">
            Sign Up
          </span>
        </Link>
      </div>

      <p className="extra-info">
        Don’t have an account? <span id="extra-span">Sign up</span>
      </p>
    </div>
  );
}

export default Signin;
