import React from "react";

import "./ThemeModal.css";

const ThemeModal = ({ themeSettingsModal }) => {
  return (
    <div className="theme-container">
      <div className="theme-header">
        <p className="theme-header-text">Theme Settings</p>
        <div
          className="theme-header-close-icon"
          onClick={themeSettingsModal}
        ></div>
      </div>
      <div className="theme-line"></div>
      <div className="theme-box">
        <div>
          <form
            style={{ display: "flex", flexDirection: "column", gap: "6px" }}
          >
            <label>Theme</label>
            <select className="theme-select-box">
              <option value="select">Select</option>
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
                <option value="select">Theme 1</option>
              </select>
            </form>
          </div>
          <div>
            <form
              style={{ display: "flex", flexDirection: "column", gap: "6px" }}
            >
              <label>Theme Type</label>
              <select style={{ width: "230px" }} className="theme-select-box">
                <option value="select">Survey</option>
              </select>
            </form>
          </div>
          <div>
            <form
              style={{ display: "flex", flexDirection: "column", gap: "6px" }}
            >
              <label>From Type</label>
              <select style={{ width: "230px" }} className="theme-select-box">
                <option value="select">One to One</option>
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
                <option value="select">No</option>
              </select>
            </form>
          </div>
          <div>
            <form
              style={{ display: "flex", flexDirection: "column", gap: "6px" }}
            >
              <label>Enable Skip</label>
              <select style={{ width: "230px" }} className="theme-select-box">
                <option value="select">Yes</option>
              </select>
            </form>
          </div>
          <div>
            <form
              style={{ display: "flex", flexDirection: "column", gap: "6px" }}
            >
              <label>Option Type</label>
              <select style={{ width: "230px" }} className="theme-select-box">
                <option value="select">Box</option>
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
                <option value="select">Roboto</option>
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
