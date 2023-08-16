import React, { useState } from "react";
import close from "../../Assets/close.svg";
import closeBlue from "../../Assets/close-blue.svg";

const QuestionType = ({ questionModal }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div
        style={{
          position: "fixed",
          height: "90px",
          width: "220px",
          display: "flex",
          right: "170px",
          background: "#FFFFFF 0% 0% no-repeat padding-box",
          "box-shadow": "0px 3px 6px #00000029",
          border: "1px solid #E3E3E3",
          "border-radius": "6px"
        }}
      >
        <div>
          <form style={{ paddingLeft: "20px", paddingTop: "10px" }}>
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
        </div>
        <div
          style={{
            height: "20px",
            width: "20px",
            marginRight: "10px",
            marginTop: "10px"
          }}
          onMouseOver={() => setShow(true)}
          onMouseOut={() => setShow(false)}
        >
          <img
            style={{ height: "12px", width: "12px" }}
            src={show ? closeBlue : close}
            alt="close-icon"
            onClick={questionModal}
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionType;
