import React, { useState } from "react";
import "./Header.css";
import profileImage from "../../Assets/amit.jpeg";
import nextIcon from "../../Assets/downArr.svg";
import nextIconBlue from "../../Assets/downArr-blue.svg";
import Lottie from "lottie-react";
import surveyAniLogo from "../../Assets/survey.json";

import LogoutModal from "../Modal/LogoutModal";

const Header = () => {
  const [show, setShow] = useState(false);
  const [over, setOver] = useState(false);

  const logoutModal = () => setShow(!show);

  return (
    <div className="header-container">
      <div className="logo-container">
        <Lottie animationData={surveyAniLogo} loop={true} />
      </div>
      <div className="profile-container">
        <div>
          <img className="img-container" src={profileImage} alt="profile-pic" />
        </div>

        <div
          onMouseOver={() => setOver(true)}
          onMouseOut={() => setOver(false)}
          onClick={() => setShow(!show)}
        >
          <img
            className="arrow-container"
            src={over ? nextIconBlue : nextIcon}
            alt="next-icon"
          />
        </div>
      </div>
      {show && <LogoutModal logoutModal={logoutModal} />}
    </div>
  );
};

export default Header;
