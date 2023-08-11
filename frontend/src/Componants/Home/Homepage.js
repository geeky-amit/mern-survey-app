import React from "react";
import Header from "../Header/Header";
import homeIcon from "../../Assets/home-run.svg";
import barIcon from "../../Assets/bars-solid.svg";
import userIcon from "../../Assets/user-solid.png";

import "./Homepage.css";
const Homepage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="side-header">
          <img className="icon" src={homeIcon} alt="home-icon" />
          <div className="user-icon-container">
            <img className="icon user-icon" src={userIcon} alt="user-icon" />
          </div>
          <img className="icon" src={barIcon} alt="bar-icon" />
        </div>

        <div className="home-container">
          <div className="home-header">
            <div className="search-container">
              <div>
                <p className="survey-text">Survey List</p>
              </div>
              <div>
                <input type="text" name="survey" className="search-icon" />
              </div>
            </div>
            <div className="sort-container">
              <div className="sort-icon"></div>
              <div className="filter-icon"></div>
              <div className="btn-container">
                <button className="bar-btn">CREATE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
