import React from "react";
import homeIcon from "../../Assets/home-run.svg";
import barIcon from "../../Assets/bars-solid.svg";
import userIcon from "../../Assets/user-solid.png";

const SideHeader = () => {
  return (
    <div className="side-header">
      <img className="icon" src={homeIcon} alt="home-icon" />
      <div className="user-icon-container">
        <img className="icon user-icon" src={userIcon} alt="user-icon" />
      </div>
      <img className="icon" src={barIcon} alt="bar-icon" />
    </div>
  );
};

export default SideHeader;
