import React from "react";
import Header from "../Header/Header";
import SideHeader from "../Header/SideHeader";
import { useNavigate } from "react-router-dom";
import "./Preview.css";

const Preview = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="container">
        <SideHeader />
        <div className="question-container">
          <div className="question-header">
            <div className="qst-arrow-box">
              <div className="left-arrow-box"></div>
              <p className="create-qst-text">Preview</p>
            </div>
            <div className="prev-save-btn">
              <button
                style={{ width: "130px" }}
                className="prev-btn"
                onClick={() => navigate("/home/createSurvey/createQuestion")}
              >
                Close Preview
              </button>
              <button className="save-btn">Save</button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              marginTop: "10px"
            }}
            className="preview-question"
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                margin: 0,
                marginBottom: "6px"
              }}
            >
              <p className="preview-question-num">Question 1</p>
              <div
                style={{
                  marginTop: "12px",

                  width: "100%",
                  height: 0,
                  border: "1px solid #707070",
                  opacity: 0.3
                }}
              ></div>
            </div>
            <div
              style={{
                textAlign: "left",
                font: "normal normal normal 16px/30px Open Sans",
                letterSpacing: "0px",
                color: "#090909"
              }}
            >
              Questuion will be here
            </div>
            <div style={{ display: "flex", gap: "40px" }}>
              <div style={{ display: "flex", gap: "10px" }}>
                <div>
                  <input type="radio" name="answer-1" />
                </div>
                <div>
                  <label
                    style={{
                      textAlign: "left",
                      font: "normal normal 600 14px/20px Open Sans",
                      letterSpacing: "0px",
                      color: "#06152B",
                      opacity: 0.8
                    }}
                  >
                    Yes
                  </label>
                </div>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <div>
                  <input type="radio" name="answer-1" />
                </div>
                <div>
                  <label
                    style={{
                      textAlign: "left",
                      font: "normal normal 600 14px/20px Open Sans",
                      letterSpacing: "0px",
                      color: "#06152B",
                      opacity: 0.8
                    }}
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              marginTop: "15px"
            }}
            className="preview-question"
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                margin: 0,
                marginBottom: "6px"
              }}
            >
              <p className="preview-question-num">Question 2</p>
              <div
                style={{
                  marginTop: "12px",

                  width: "100%",
                  height: 0,
                  border: "1px solid #707070",
                  opacity: 0.3
                }}
              ></div>
            </div>
            <div
              style={{
                textAlign: "left",
                font: "normal normal normal 16px/30px Open Sans",
                letterSpacing: "0px",
                color: "#090909"
              }}
            >
              Questuion will be here
            </div>
            <div style={{ display: "flex", gap: "40px" }}>
              <div style={{ display: "flex", gap: "10px" }}>
                <div>
                  <input type="radio" name="answer-2" />
                </div>
                <div>
                  <label
                    style={{
                      textAlign: "left",
                      font: "normal normal 600 14px/20px Open Sans",
                      letterSpacing: "0px",
                      color: "#06152B",
                      opacity: 0.8
                    }}
                  >
                    Yes
                  </label>
                </div>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <div>
                  <input type="radio" name="answer-2" />
                </div>
                <div>
                  <label
                    style={{
                      textAlign: "left",
                      font: "normal normal 600 14px/20px Open Sans",
                      letterSpacing: "0px",
                      color: "#06152B",
                      opacity: 0.8
                    }}
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              marginTop: "10px"
            }}
            className="preview-question"
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                margin: 0,
                marginBottom: "6px"
              }}
            >
              <p className="preview-question-num">Question 3</p>
              <div
                style={{
                  marginTop: "12px",

                  width: "100%",
                  height: 0,
                  border: "1px solid #707070",
                  opacity: 0.3
                }}
              ></div>
            </div>
            <div
              style={{
                textAlign: "left",
                font: "normal normal normal 16px/30px Open Sans",
                letterSpacing: "0px",
                color: "#090909"
              }}
            >
              Questuion will be here
            </div>
            <div style={{ display: "flex", gap: "40px" }}>
              <div style={{ display: "flex", gap: "10px" }}>
                <div>
                  <input type="radio" name="answer-3" />
                </div>
                <div>
                  <label
                    style={{
                      textAlign: "left",
                      font: "normal normal 600 14px/20px Open Sans",
                      letterSpacing: "0px",
                      color: "#06152B",
                      opacity: 0.8
                    }}
                  >
                    One Group
                  </label>
                </div>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <div>
                  <input type="radio" name="answer-3" />
                </div>
                <div>
                  <label
                    style={{
                      textAlign: "left",
                      font: "normal normal 600 14px/20px Open Sans",
                      letterSpacing: "0px",
                      color: "#06152B",
                      opacity: 0.8
                    }}
                  >
                    Two Group
                  </label>
                </div>
              </div>

              <div style={{ display: "flex", gap: "10px" }}>
                <div>
                  <input type="radio" name="answer-3" />
                </div>
                <div>
                  <label
                    style={{
                      textAlign: "left",
                      font: "normal normal 600 14px/20px Open Sans",
                      letterSpacing: "0px",
                      color: "#06152B",
                      opacity: 0.8
                    }}
                  >
                    More Then Two Group
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              marginTop: "10px"
            }}
            className="preview-question"
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                margin: 0,
                marginBottom: "6px"
              }}
            >
              <p className="preview-question-num">Question 4</p>
              <div
                style={{
                  marginTop: "12px",

                  width: "100%",
                  height: 0,
                  border: "1px solid #707070",
                  opacity: 0.3
                }}
              ></div>
            </div>
            <div
              style={{
                textAlign: "left",
                font: "normal normal normal 16px/30px Open Sans",
                letterSpacing: "0px",
                color: "#090909"
              }}
            >
              Questuion will be here
            </div>
            <div style={{ display: "flex", gap: "40px" }}>
              <div style={{ display: "flex", gap: "10px" }}>
                <div>
                  <input type="radio" name="answer-4" />
                </div>
                <div>
                  <label
                    style={{
                      textAlign: "left",
                      font: "normal normal 600 14px/20px Open Sans",
                      letterSpacing: "0px",
                      color: "#06152B",
                      opacity: 0.8
                    }}
                  >
                    Yes
                  </label>
                </div>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <div>
                  <input type="radio" name="answer-4" />
                </div>
                <div>
                  <label
                    style={{
                      textAlign: "left",
                      font: "normal normal 600 14px/20px Open Sans",
                      letterSpacing: "0px",
                      color: "#06152B",
                      opacity: 0.8
                    }}
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preview;
