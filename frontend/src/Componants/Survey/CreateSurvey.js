import React from "react";
import Header from "../Header/Header";
import SideHeader from "../Header/SideHeader";
import "../Header/SideHeader.css";
import "./CreateSurvey.css";

const CreateSurvey = () => {
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
              <button type="button" className="cancel-btn">
                Cancel
              </button>
              <button type="button" className="next-btn" disabled>
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
                  />
                </div>
                <div className="description-container">
                  <label>Description</label>
                  <textarea
                    type="text"
                    placeholder="Description"
                    className="description-input"
                  />
                </div>
                <div className="survey-type-container">
                  <label>Type of Survey</label>
                  <div>
                    <select className="survey-select" name="surveyType">
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
                    />
                  </div>
                  <div>
                    <div>
                      <label>End Date</label>
                      <input
                        className="date-input"
                        type="date"
                        name="start-date"
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
                  />
                </div>
                <div className="upload-container">
                  <label>Upload Image</label>
                  <input
                    className="file-input"
                    type="file"
                    name="image"
                    accept="image/*"
                    placeholder="Upload"
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
