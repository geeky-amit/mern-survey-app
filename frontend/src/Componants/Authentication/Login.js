import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();
  const loginHandler = async () => {
    if (!email || !password) {
      alert("Please enter your Email nad Password");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/user/login", {
        email,
        password
      });
      console.log(res);
      alert("Login successful");
      navigate("/home");
    } catch (error) {
      alert(error.response.data.message, "Please first Registered");
      alert("Something went wrong");
      console.log("Something went wrong", error);
    }
  };

  return (
    <div className="login-container">
      <div className="register-box">
        <p className="p1-text">Welcome Page</p>
        <p className="p2-text">One line text Will be here</p>
        <p className="p3-text">Sign in to continue access pages</p>
        <p className="p4-text">Don’t Have An Account?</p>
        <div className="register-btn">
          <button className="reg-btn" onClick={() => navigate("/signup")}>
            Register
          </button>
        </div>
      </div>
      <div className="signin-box">
        <p className="sign-p1-text">Sign In</p>
        <p className="sign-p2-text">Sign in to continue access pages</p>
        <div className="form-box">
          <form method="post">
            <div className="input-container-signin">
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-line"></div>
            <div className="input-container-signin">
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-line"></div>
          </form>
        </div>
        <button className="signin-btn" onClick={loginHandler}>
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Login;
