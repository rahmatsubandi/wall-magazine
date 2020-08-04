import React, { useState, useEffect } from "react";

import Fade from "react-reveal/Fade";

import Page from "../layout/Page";
import Footer from "../layout/Footer";

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
    // save theme in localStorage/ data in crome
    // localStorage.setItem("theme-color", theme);
  };

  return (
    <div className={`App ${colorTheme}`}>
      <div className="theme-options">
        <Fade top delay={500}>
          <h6>Choose your favorite color:</h6>
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
        </Fade>
      </div>
      <Fade top delay={600}>
        <h3 className="text-center">Wall Magazine</h3>
      </Fade>
      <Fade top delay={700}>
        <h5 className="text-center">These are some of my projects</h5>
      </Fade>
      <Page />
      <Footer />
    </div>
  );
}

export default ThemeOptions;
