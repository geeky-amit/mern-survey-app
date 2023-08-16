import React, { useState } from "react";
import box from "../../Assets/box.svg";
import boxSolid from "../../Assets/box-solid.svg";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import "./Signup.css";
import "./Login.css";

const Signup = () => {
  const toast = useToast();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [profession, setProfession] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [tick, setTick] = useState(false);

  const navigate = useNavigate(true);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (
      !name ||
      !email ||
      !phone ||
      !profession ||
      !password ||
      !confirmPassword ||
      !tick
    ) {
      toast({
        title: "Please fill all the field!",
        status: "warning",
        duration: 4000,
        isClosable: true,
        position: "top"
      });
      return;
    }

    if (password !== confirmPassword) {
      toast({
        title: "Confirm Password do not match!",
        status: "warning",
        duration: 4000,
        isClosable: true,
        position: "top"
      });
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/user", {
        name,
        email,
        phone,
        profession,
        password
      });

      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 4000,
        isClosable: true,
        position: "top"
      });

      navigate("/");
    } catch (error) {
      toast({
        title: `${error.response.data.message}!`,
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top"
      });
      console.log("something went wrong", error.response.data.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="register-box">
        <p className="p1-text">Welcome Page</p>
        <p className="p2-text">One line text Will be here</p>
        <p className="p3-text">Sign in to continue access pages</p>
        <p className="p4-text">Already Have An Account?</p>
        <div className="register-btn">
          <button className="reg-btn" onClick={() => navigate("/")}>
            Sign in
          </button>
        </div>
      </div>
      <div className="signup-box">
        <p className="sign-p1-text">Register</p>
        <p className="sign-p2-text">Register to continue access pages</p>
        <div>
          <form>
            <div className="form-container">
              <div>
                <div className="input-container">
                  <input
                    type="text"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-line-signup"></div>
                <div className="input-container">
                  <input
                    type="tel"
                    placeholder="Phone"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="form-line-signup"></div>
                <div className="input-container">
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-line-signup"></div>
              </div>

              <div>
                <div className="input-container">
                  <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-line-signup"></div>
                <div className="input-container profession-container">
                  <input
                    type="text"
                    placeholder="Profession"
                    onChange={(e) => setProfession(e.target.value)}
                  />
                </div>
                <div className="form-line-signup"></div>
                <div className="input-container">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="form-line-signup"></div>
              </div>
            </div>
          </form>
        </div>
        <div className="term">
          <div>
            <img
              onClick={() => setTick(!tick)}
              src={tick ? boxSolid : box}
              className="term-img"
              alt="checkbox"
            />
          </div>
          <p className="term-text">
            I agree to Terms & Condition receiving marketing and promotional
            materials
          </p>
        </div>
        <button className="signup-btn" onClick={submitHandler}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Signup;
