import React, { useState } from "react";
import Header from "../Header/Header";
import SideHeader from "../Header/SideHeader";
import { useNavigate } from "react-router-dom";
import gear from "../../Assets/gear-white.svg";
import QuestionType from "../Modal/QuestionType";
import ThemeModal from "../Modal/ThemeModal";

import "./CreateQuestion.css";
import "../Header/SideHeader.css";

const CreateQuestion = () => {
  const navigate = useNavigate();
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [showThemeModal, setShowThemeModal] = useState(false);

  const questionModal = () => setShowQuestionModal(!showQuestionModal);
  const themeSettingsModal = () => setShowThemeModal(!showThemeModal);

  return (
    <>
      {showThemeModal && <ThemeModal themeSettingsModal={themeSettingsModal} />}
      <Header />
      <div className="container">
        <SideHeader />
        <div className="question-container">
          <div className="question-header">
            <div className="qst-arrow-box">
              <div
                className="left-arrow-box"
                onClick={() => navigate("/home/createSurvey")}
              ></div>
              <p className="create-qst-text">Create Questions</p>
            </div>
            <div className="prev-save-btn">
              <button className="theme-btn" onClick={themeSettingsModal}>
                <div className="theme-gear">
                  <img src={gear} alt="gear-icon" />
                </div>
                <div className="theme-btn-text">Theme Settings</div>
              </button>
              <button
                className="prev-btn"
                onClick={() =>
                  navigate("/home/createSurvey/createQuestion/preview")
                }
              >
                Preview
              </button>
              <button className="save-btn">Save</button>
            </div>
          </div>
          <div className="question-container-box">
            <div className="qst-num-container">
              <p className="qst-num-text">Q 1</p>
              <div className="qst-val-box">
                <form>
                  <label className="qst-label">Question</label>
                  <input
                    type="text"
                    name="question"
                    placeholder="Enter Question"
                    className="qst-input"
                  />
                </form>
                <form
                  style={{
                    display: "flex",
                    gap: "8px",
                    flexDirection: "column"
                  }}
                >
                  <div className="radio-opt">
                    <div>
                      <input type="radio" />
                    </div>
                    <div>
                      <label className="label-qst-text">Value</label>
                    </div>
                  </div>
                  <div className="radio-opt">
                    <div>
                      <input type="radio" />
                    </div>
                    <div>
                      <label className="label-qst-text">Value</label>
                    </div>
                  </div>
                  <div className="radio-opt">
                    <div>
                      <input type="radio" />
                    </div>
                    <div>
                      <label className="label-qst-text">Value</label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="gear-icon" onClick={questionModal}>
              {showQuestionModal && (
                <QuestionType questionModal={questionModal} />
              )}
            </div>
          </div>
          <div className="question-add">
            <button className="qst-add-btn">Add question</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateQuestion;
