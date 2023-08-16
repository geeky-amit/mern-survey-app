import React from "react";
import profileImage from "../../Assets/amit.jpeg";
import { useNavigate } from "react-router-dom";

import "./LogoutModal.css";
const LogoutModal = ({ logoutModal }) => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.clear("userInfo");
    navigate("/");
  };
  return (
    <div className="logout-container">
      <div style={{ display: "flex", gap: "20px", marginLeft: "40px" }}>
        <div style={{ marginLeft: "15px", marginTop: "6px" }}>
          <img
            style={{
              height: "30px",
              width: "30px"
            }}
            className="img-container"
            src={profileImage}
            alt="profile-pic"
          />
        </div>
        <div
          style={{
            marginTop: "9px",
            font: "normal normal 600 18px/24px Open Sans",
            letterSpacing: "0.54px",
            color: "#5C5C5C"
          }}
        >
          Amit
        </div>
        <div className="lg-close-icon" onClick={logoutModal}></div>
      </div>
      <div
        style={{
          border: "1px solid #878889",
          height: 0,
          width: "90%",
          marginLeft: "10px",
          marginTop: "7px",
          opacity: 0.1
        }}
      ></div>
      <div className="lg-text-container" onClick={logoutHandler}>
        Logout
      </div>
    </div>
  );
};

export default LogoutModal;
