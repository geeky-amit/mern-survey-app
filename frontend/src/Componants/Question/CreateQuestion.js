import React from "react";
import Header from "../Header/Header";
import SideHeader from "../Header/SideHeader";

import "./CreateQuestion.css";
import "../Header/SideHeader.css";

const CreateQuestion = () => {
  return (
    <>
      <Header />
      <div className="container">
        <SideHeader />
        <div className="question-container">
          <div className="question-header">
            <div className="qst-arrow-box">
              <div className="left-arrow-box"></div>
              <p className="create-qst-text">Create Questions</p>
            </div>
            <div className="prev-save-btn">
              <button className="prev-btn">Preview</button>
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
                <form>
                  <div className="radio-opt">
                    <div>
                      <input type="radio" />
                    </div>
                    <label className="label-qst-text">Value</label>
                  </div>
                  <div className="radio-opt">
                    <div>
                      <input type="radio" />
                    </div>
                    <label className="label-qst-text">Value</label>
                  </div>
                  <div className="radio-opt">
                    <div>
                      <input type="radio" />
                    </div>
                    <label className="label-qst-text">Value</label>
                  </div>
                </form>
              </div>
            </div>
            <div className="gear-icon"></div>
          </div>
          <div className="question-add"></div>
        </div>
      </div>
    </>
  );
};

export default CreateQuestion;
