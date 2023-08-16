import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import SideHeader from "../Header/SideHeader";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

import "./Homepage.css";
import "../Header/SideHeader.css";
const Homepage = ({ user }) => {
  const navigate = useNavigate();
  const [surveys, setSurveys] = useState([]);
  const toast = useToast();

  const deleteSurvey = async (id) => {
    if (!id) {
      toast({
        title: "Something Went Wrong!",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top"
      });
      return;
    }
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      };

      const res = await axios.delete(
        `http://localhost:5000/api/survey/${id}`,
        config
      );

      if (res.data.deletedCount) {
        getSurvey();

        toast({
          title: "Survey Deleted Successfully!",
          status: "success",
          duration: 4000,
          isClosable: true,
          position: "top"
        });
      } else {
        toast({
          title: "Survey Deletion Failed!",
          status: "error",
          duration: 4000,
          isClosable: true,
          position: "top"
        });
      }
    } catch (error) {
      toast({
        title: "Something Went Wrong!",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top"
      });
      console.log(error);
    }
  };

  const getSurvey = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      };

      const res = await axios.get("http://localhost:5000/api/survey", config);

      setSurveys(res.data);
    } catch (error) {
      console.log("something went wrong", error);
    }
  };

  useEffect(() => {
    getSurvey();
    // eslint-disable-next-line
  }, []);

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
            <tr className="table-heading">
              <th>Name</th>
              <th>Description</th>
              <th>Type</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Actions</th>
            </tr>

            {surveys.map((survey) => (
              <tr className="survey-data" key={survey._id}>
                <td>{survey.name}</td>
                <td>{survey.description}</td>
                <td>{survey.typeOfSurvey}</td>
                <td>{survey.startDate}</td>
                <td>{survey.endDate}</td>
                <td style={{ display: "flex", gap: "30px" }}>
                  <div className="edit-icon"></div>
                  <div
                    className="delete-icon"
                    onClick={() => deleteSurvey(survey._id)}
                  ></div>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default Homepage;
