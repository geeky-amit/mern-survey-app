import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const toast = useToast();
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast({
        title: "Please enter your email and password!",
        status: "warning",
        duration: 4000,
        isClosable: true,
        position: "top"
      });

      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json"
        }
      };

      const data = await axios.post(
        "http://localhost:5000/api/user/login",
        {
          email,
          password
        },
        config
      );

      localStorage.setItem("userInfo", JSON.stringify(data));

      toast({
        title: "Signed in successfully!",
        status: "success",
        duration: 4000,
        isClosable: true,
        position: "top"
      });

      navigate("/home");
    } catch (error) {
      toast({
        title: `${error.response.data.message}!`,
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top"
      });
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
