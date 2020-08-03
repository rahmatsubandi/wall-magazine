import React, { useState, useEffect } from "react";
import Page from "../layout/Page";

import "./switcher.scss";

function ThemeOptions() {
  // state
  const [colorTheme, setColorTheme] = useState("theme-white");

  // effect
  useEffect(() => {
    // check for selected theme => localStorage value
    const currentThemeColor = localStorage.getItem("theme-color");
    // if found set selected theme value in state
    if (currentThemeColor) {
      setColorTheme(currentThemeColor);
    }
  }, []);

  // set theme
  const handleClick = (theme) => {
    setColorTheme(theme);
    localStorage.setItem("theme-color", theme);
  };

  return (
    <div className={`App ${colorTheme}`}>
      <div className="theme-options">
        <h6>Select your theme:</h6>
        <div
          id="theme-white"
          onClick={() => handleClick("theme-white")}
          className={`${colorTheme === "theme-white" ? "active" : ""}`}
        />
        <div
          id="theme-blue"
          onClick={() => handleClick("theme-blue")}
          className={`${colorTheme === "theme-blue" ? "active" : ""}`}
        />
        <div
          id="theme-orange"
          onClick={() => handleClick("theme-orange")}
          className={`${colorTheme === "theme-orange" ? "active" : ""}`}
        />
        <div
          id="theme-purple"
          onClick={() => handleClick("theme-purple")}
          className={`${colorTheme === "theme-purple" ? "active" : ""}`}
        />
        <div
          id="theme-green"
          onClick={() => handleClick("theme-green")}
          className={`${colorTheme === "theme-green" ? "active" : ""}`}
        />
        <div
          id="theme-black"
          onClick={() => handleClick("theme-black")}
          className={`${colorTheme === "theme-black" ? "active" : ""}`}
        />
      </div>
      <Page />
    </div>
  );
}

export default ThemeOptions;
