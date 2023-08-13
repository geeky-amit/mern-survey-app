import React from "react";
import Header from "../Header/Header";
import SideHeader from "../Header/SideHeader";
import { useNavigate } from "react-router-dom";

import "./Homepage.css";
import "../Header/SideHeader.css";
const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="container">
        <div>
          <SideHeader />
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
                <button
                  className="bar-btn"
                  onClick={() => navigate("/home/createSurvey")}
                >
                  CREATE
                </button>
              </div>
            </div>
          </div>

          <table className="menu-container">
            <tr className="menu-item-container">
              <th>Name</th>
              <th>Description</th>
              <th>Type</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Actions</th>
            </tr>
            <tr className="table-data">
              <td>Survey Name</td>
              <td>This survey is about the topic</td>
              <td>Video</td>
              <td>10-Feb-2020</td>
              <td>27-Feb-2020</td>
              <td style={{ display: "flex", gap: "30px" }}>
                <div className="edit-icon"></div>
                <div className="delete-icon"></div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default Homepage;
