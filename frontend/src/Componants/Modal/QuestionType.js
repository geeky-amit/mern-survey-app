import React from "react";
import close from "../../Assets/close.svg";

const QuestionType = ({ questionModal }) => {
  return (
    <div>
      <div
        style={{
          position: "fixed",
          height: "70px",
          width: "180px",
          display: "flex",
          right: "170px",
          background: "#FFFFFF 0% 0% no-repeat padding-box",
          "box-shadow": "0px 3px 6px #00000029",
          border: "1px solid #E3E3E3",
          "border-radius": "6px"
        }}
      >
        <form style={{ padding: "10px" }}>
          <label
            style={{
              "text-align": "left",
              font: "normal normal 600 14px/19px Open Sans",
              "letter-spacing": "0.14px",
              color: "#2D2D2E"
            }}
          >
            Question Type
          </label>
          <select
            style={{
              background: " #FFFFFF 0% 0% no-repeat padding-box",
              border: "1px solid #2A86C7",
              "border-radius": "4px",
              color: "#2A86C7"
            }}
          >
            <option value="1">Multiple Choice</option>
          </select>
        </form>
        <div>
          <img
            style={{ height: "12px", width: "12px", padding: "10px" }}
            src={close}
            alt="close-icon"
            onClick={questionModal}
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionType;
