import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="register-box">
        <p className="p1-text">Welcome Page</p>
        <p className="p2-text">One line text Will be here</p>
        <p className="p3-text">Sign in to continue access pages</p>
        <p className="p4-text">Don’t Have An Account?</p>
        <div className="register-btn">
          <button className="reg-btn">Register</button>
        </div>
      </div>
      <div className="signin-box">
        <p className="sign-p1-text">Sign In</p>
        <p className="sign-p2-text">Sign in to continue access pages</p>
        <div className="form-box">
          <form>
            <div>
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-line"></div>
            <div>
              <input type="password" placeholder="Password" />
            </div>
            <div className="form-line"></div>
          </form>
        </div>
        <button className="signin-btn">Sign in</button>
      </div>
    </div>
  );
};

export default Login;
