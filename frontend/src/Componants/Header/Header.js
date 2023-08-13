import React from "react";
import "./Header.css";
import profileImage from "../../Assets/amit.jpeg";
import next from "../../Assets/next.svg";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">LOGO</div>
      <div className="profile-container">
        <img className="img-container" src={profileImage} alt="profile-pic" />

        <img className="arrow-container" src={next} alt="next-arrow" />
      </div>
    </div>
  );
};

export default Header;
