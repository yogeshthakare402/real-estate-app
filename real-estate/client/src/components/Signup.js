import React, { useState, useEffect } from "react";
import './RealEstate.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Signup() {
  const [sigupDetails, setSignDetails] = useState({
    MailId: "",
    Password: "",
    confirmPassword: "",
  });
  // const [confirm, setConfirm] = useState(true);
  useEffect(() => {
    console.log(
      sigupDetails.MailId,
      sigupDetails.Password,
      sigupDetails.confirmPassword
    );
  });

  const navigate = useNavigate();
  const handleSubmit = () => {
    if (sigupDetails.Password !== sigupDetails.confirmPassword) {
      setSignDetails({
        MailId: "",
        Password: "",
        confirmPassword: "",
      });
      alert("Password and confirm password must be same");
    }
//after sign up navigate to sign in page
    navigate("/signin");
  };
  return (
    <div className="container">
      <div className="login" id="logid">
        <img
          id="logo-signup"
          className="signup-items"
          alt="logo"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/88975523945059.5632b7d5654ae.png"
        />
        <span id="credential-signup" className="login-items">
          Create New Account
        </span>
        <input
          type="email"
          placeholder="         Email-id"
          className="signup-items"
          onChange={(e) =>
            setSignDetails({ ...sigupDetails, MailId: e.target.value })
          }
          value={sigupDetails.MailId}
          id="mailId"
        />
        <input
          type="password"
          placeholder="         Password"
          className="signup-items"
          onChange={(e) =>
            setSignDetails({ ...sigupDetails, Password: e.target.value })
          }
          value={sigupDetails.Password}
          id="pass-signup"
        />
        <input
          type="password"
          placeholder="         Confirm Password"
          className="signup-items"
          onChange={(e) =>
            setSignDetails({ ...sigupDetails, confirmPassword: e.target.value })
          }
          value={sigupDetails.confirmPassword}
          id="confirmpass-signup"
        />
        <button id="signup-btn" onClick={handleSubmit} className="signup-items">
          Sign Up
        </button>
      </div>
      <Link to="/">
        <p className="extra-info">
          <span>Sign In</span>
        </p>
      </Link>
    </div>
  );
}

export default Signup;
