import React from "react";

import "./ThemeModal.css";

const ThemeModal = ({ themeSettingsModal }) => {
  return (
    <div className="theme-container">
      <div className="theme-header">
        <div>
          <p className="theme-header-text">Theme Settings</p>
        </div>

        <div>
          <div
            className="theme-header-close-icon"
            onClick={themeSettingsModal}
          ></div>
        </div>
      </div>
      <div className="theme-line"></div>
      <div className="theme-box">
        <div>
          <form
            style={{ display: "flex", flexDirection: "column", gap: "6px" }}
          >
            <label>Theme</label>
            <select className="theme-select-box">
              <option value="none" selected disabled hidden>
                Select
              </option>
              <option value="dark">Dark</option>
              <option value="light">Light</option>
            </select>
          </form>
        </div>
        <div
          style={{ marginTop: "30px", opacity: ".2" }}
          className="theme-line"
        ></div>
        <div style={{ display: "flex", gap: "64px", width: "100%" }}>
          <div>
            <form
              style={{ display: "flex", flexDirection: "column", gap: "6px" }}
            >
              <label>Theme Name</label>
              <select style={{ width: "230px" }} className="theme-select-box">
                <option value="none" selected disabled hidden>
                  Select
                </option>
                <option value="theme-1">Theme 1</option>
                <option value="theme-2">Theme 2</option>
                <option value="theme-3">Theme 3</option>
              </select>
            </form>
          </div>
          <div>
            <form
              style={{ display: "flex", flexDirection: "column", gap: "6px" }}
            >
              <label>Theme Type</label>
              <select style={{ width: "230px" }} className="theme-select-box">
                <option value="none" selected disabled hidden>
                  Select
                </option>
                <option value="survey">Survey</option>
                <option value="feedback">Feedback</option>
                <option value="video">Video</option>
              </select>
            </form>
          </div>
          <div>
            <form
              style={{ display: "flex", flexDirection: "column", gap: "6px" }}
            >
              <label>From Type</label>
              <select style={{ width: "230px" }} className="theme-select-box">
                <option value="none" selected disabled hidden>
                  Select
                </option>
                <option value="onetoone">One to One</option>
                <option value="onetoone">Group</option>
              </select>
            </form>
          </div>
        </div>
        <div style={{ display: "flex", gap: "64px", width: "100%" }}>
          <div>
            <form
              style={{ display: "flex", flexDirection: "column", gap: "6px" }}
            >
              <label>All Question Mandatory</label>
              <select style={{ width: "230px" }} className="theme-select-box">
                <option value="none" selected disabled hidden>
                  Select
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </form>
          </div>
          <div>
            <form
              style={{ display: "flex", flexDirection: "column", gap: "6px" }}
            >
              <label>Enable Skip</label>
              <select style={{ width: "230px" }} className="theme-select-box">
                <option value="none" selected disabled hidden>
                  Select
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </form>
          </div>
          <div>
            <form
              style={{ display: "flex", flexDirection: "column", gap: "6px" }}
            >
              <label>Option Type</label>
              <select style={{ width: "230px" }} className="theme-select-box">
                <option value="none" selected disabled hidden>
                  Select
                </option>
                <option value="box">Box</option>
                <option value="radio">Radio</option>
              </select>
            </form>
          </div>
        </div>
        <div
          style={{ marginTop: "30px", opacity: ".2" }}
          className="theme-line"
        ></div>
        <div style={{ display: "flex", gap: "64px", width: "100%" }}>
          <div>
            <form
              style={{ display: "flex", flexDirection: "column", gap: "6px" }}
            >
              <label>Font</label>
              <select style={{ width: "230px" }} className="theme-select-box">
                <option value="none" selected disabled hidden>
                  Select
                </option>
                <option value="roboato">Roboto</option>
                <option value="opensans">Open Sans</option>
                <option value="montserat">Montserrat-Regular</option>
              </select>
            </form>
          </div>
          <div>
            <form
              style={{ display: "flex", flexDirection: "column", gap: "6px" }}
            >
              <label>Colour</label>
              <input
                type="text"
                placeholder="#"
                style={{ width: "230px", height: "25px" }}
                className="theme-select-box"
              ></input>
            </form>
          </div>
        </div>
      </div>
      <div
        style={{ marginTop: "30px", opacity: ".2" }}
        className="theme-line"
      ></div>
      <div
        style={{
          paddingTop: "20px",
          display: "flex",
          gap: "20px",
          justifyContent: "center"
        }}
        className="theme-footer"
      >
        <button className="theme-cancle-btn" onClick={themeSettingsModal}>
          CANCLE
        </button>
        <button className="theme-save-btn">SAVE</button>
      </div>
    </div>
  );
};

export default ThemeModal;
