import React from "react";
import homeIcon from "../../Assets/home-run.svg";
import barIcon from "../../Assets/bars-solid.svg";
import userIcon from "../../Assets/user-solid.png";
import { useNavigate } from "react-router-dom";
import "./SideHeader.css";

const SideHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="side-header">
      <div onClick={() => navigate("/home")}>
        <img className="icon-h" src={homeIcon} alt="home-icon" />
      </div>
      <div className="user-icon-container">
        <img className="user-icon-h" src={userIcon} alt="user-icon" />
      </div>
      <div>
        <img className="icon-h" src={barIcon} alt="bar-icon" />
      </div>
    </div>
  );
};

export default SideHeader;
