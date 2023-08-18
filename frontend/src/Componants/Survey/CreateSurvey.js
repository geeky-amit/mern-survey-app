import React, { useState, useRef } from "react";
import Header from "../Header/Header";
import SideHeader from "../Header/SideHeader";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import uploadImg from "../../Assets/file-upload.png";

import "../Header/SideHeader.css";
import "./CreateSurvey.css";

const CreateSurvey = ({ user }) => {
  const navigate = useNavigate();

  const toast = useToast();

  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [typeOfSurvey, setTypeOfSurvey] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [otherCriteria, setOtherCriteria] = useState();
  const [surveyPicture, setSurveyPicture] = useState();

  const [image, setImage] = useState();
  const uploadRef = useRef();

  const imageHandler = (pic) => {
    if (
      pic.type === "image/jpeg" ||
      pic.type === "image/png" ||
      pic.type === "image/jpg"
    ) {
      setImage(pic);
      const data = new FormData();
      data.append("file", pic);
      data.append("upload_preset", "survey-app");
      data.append("cloud_name", "cocoamit");

      fetch("https://api.cloudinary.com/v1_1/cocoamit/image/upload", {
        method: "POST",
        body: data
      })
        .then((res) => res.json())
        .then((data) => {
          setSurveyPicture(data.url.toString());
        })
        .catch((err) => console.log(err));
    } else {
      console.log("Something went wrong");
      return;
    }
  };

  const submitHandler = async () => {
    if (
      !name ||
      !description ||
      !typeOfSurvey ||
      !startDate ||
      !endDate ||
      !surveyPicture
    ) {
      toast({
        title: "Please fill all the fields",
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
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`
        }
      };

      await axios.post(
        "http://localhost:5000/api/survey/createSurvey",
        {
          name,
          description,
          typeOfSurvey,
          startDate,
          endDate,
          otherCriteria,
          surveyPicture
        },
        config
      );

      toast({
        title: "Survey Created Successfully!",
        status: "success",
        duration: 4000,
        isClosable: true,
        position: "top"
      });
      navigate("/home/createSurvey/createQuestion");
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

  const handleImageClick = () => {
    uploadRef.current.click();
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <Header />
      <div className="container">
        <SideHeader />

        <div className="survey-container">
          <div className="survey-header">
            <div>
              <p className="survey-text">Create Survey</p>
            </div>
            <div className="survey-btn-container">
              <button
                type="button"
                className="cancel-btn"
                onClick={() => navigate("/home")}
              >
                Cancel
              </button>
              <button
                type="button"
                className="next-btn"
                onClick={submitHandler}
              >
                Next
              </button>
            </div>
          </div>
          <div className="line"></div>
          <div className="form-container-left">
            <div>
              <form>
                <div className="name-container">
                  <label>Name</label>
                  <input
                    className="name-input"
                    type="text"
                    placeholder="Name here"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="description-container">
                  <label>Description</label>
                  <textarea
                    type="text"
                    placeholder="Description"
                    className="description-input"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="survey-type-container">
                  <label>Type of Survey</label>
                  <div>
                    <select
                      className="survey-select"
                      name="surveyType"
                      onChange={(e) => setTypeOfSurvey(e.target.value)}
                    >
                      <option value="none" selected disabled hidden>
                        Select
                      </option>
                      <option value="Video">Video</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Product">Product</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <div className="vertical-line"></div>
            <div>
              <form className="form-container-right">
                <div className="date-container">
                  <div>
                    <label>Start Date</label>
                    <input
                      className="date-input"
                      type="date"
                      name="start-date"
                      min={today}
                      value={today}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>
                  <div>
                    <div>
                      <label>End Date</label>
                      <input
                        className="date-input"
                        type="date"
                        name="start-date"
                        min={today}
                        placeholder="DD MM YYYY"
                        onChange={(e) => setEndDate(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="other-container">
                  <label>Other Criteria</label>

                  <textarea
                    type="text"
                    placeholder="Enter Here"
                    className="other-text"
                    onChange={(e) => setOtherCriteria(e.target.value)}
                  />
                </div>
                <div className="upload-container">
                  <label>Upload Image</label>
                  <div
                    className="upload-img-box"
                    style={{
                      width: "100%",
                      height: "150px",
                      border: "1px solid #cccccc",
                      borderRadius: "4px"
                    }}
                    onClick={handleImageClick}
                  >
                    {image ? (
                      <img
                        style={{
                          width: "100%",
                          height: "148px"
                        }}
                        src={URL.createObjectURL(image)}
                      />
                    ) : (
                      <img
                        style={{
                          height: "148px",
                          marginLeft: "140px"
                        }}
                        src={uploadImg}
                      />
                    )}
                  </div>

                  <input
                    className="file-input"
                    type="file"
                    accept="image/"
                    placeholder="Upload Image"
                    ref={uploadRef}
                    onChange={(e) => imageHandler(e.target.files[0])}
                    style={{ display: "none" }}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateSurvey;
