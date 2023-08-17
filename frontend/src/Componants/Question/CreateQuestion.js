import React, { useState } from "react";
import Header from "../Header/Header";
import SideHeader from "../Header/SideHeader";
import { useNavigate } from "react-router-dom";
import gear from "../../Assets/gear-white.svg";
import QuestionType from "../Modal/QuestionType";
import ThemeModal from "../Modal/ThemeModal";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

import "./CreateQuestion.css";
import "../Header/SideHeader.css";

const CreateQuestion = ({ user }) => {
  const navigate = useNavigate();
  const toast = useToast();
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [showThemeModal, setShowThemeModal] = useState(false);

  const [question, setQuestion] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");

  const questionModal = () => setShowQuestionModal(!showQuestionModal);
  const themeSettingsModal = () => setShowThemeModal(!showThemeModal);

  const questionHandler = async () => {
    if (!question || !optionA || !optionB) {
      toast({
        title: "Please fill all the fields!",
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
        "http://localhost:5000/api/question/createQuestion",
        {
          question,
          optionA,
          optionB,
          optionC,
          optionD
        },
        config
      );

      toast({
        title: "Question Created Successfully!",
        status: "success",
        duration: 4000,
        isClosable: true,
        position: "top"
      });
    } catch (error) {
      toast({
        title: `${error.response.message}!`,
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top"
      });
      console.log("Something went wrong", error);
    }
  };

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
                <div>
                  <img className="theme-gear-icn" src={gear} alt="gear-icon" />
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
              <div>
                <p className="qst-num-text">Q 1</p>
              </div>
              <div className="qst-val-box">
                <form>
                  <label className="qst-label">Question</label>
                  <input
                    type="text"
                    name="question"
                    placeholder="Enter Question"
                    className="qst-input"
                    onChange={(e) => setQuestion(e.target.value)}
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
                      <label className="opt-lbl-qst">Option A:</label>
                    </div>
                    <div>
                      <input
                        style={{
                          width: "200px",
                          height: "20px",
                          border: "1px solid #CCCCCC",
                          "border-radius": "4px",
                          font: "normal normal normal 12px/22px Open Sans"
                        }}
                        type="text"
                        onChange={(e) => setOptionA(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="radio-opt">
                    <div>
                      <label className="opt-lbl-qst">Option B:</label>
                    </div>
                    <div>
                      <input
                        style={{
                          width: "200px",
                          height: "20px",
                          border: "1px solid #CCCCCC",
                          "border-radius": "4px",
                          font: "normal normal normal 12px/22px Open Sans"
                        }}
                        type="text"
                        onChange={(e) => setOptionB(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="radio-opt">
                    <div>
                      <label className="opt-lbl-qst">Option C:</label>
                    </div>
                    <div>
                      <input
                        style={{
                          width: "200px",
                          height: "20px",
                          border: "1px solid #CCCCCC",
                          "border-radius": "4px",
                          font: "normal normal normal 12px/22px Open Sans"
                        }}
                        type="text"
                        onChange={(e) => setOptionC(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="radio-opt">
                    <div>
                      <label className="opt-lbl-qst">Option D:</label>
                    </div>
                    <div>
                      <input
                        style={{
                          width: "200px",
                          height: "20px",
                          border: "1px solid #CCCCCC",
                          "border-radius": "4px",
                          font: "normal normal normal 12px/22px Open Sans"
                        }}
                        type="text"
                        onChange={(e) => setOptionD(e.target.value)}
                      />
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
            <button className="qst-add-btn" onClick={questionHandler}>
              Add question
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateQuestion;
