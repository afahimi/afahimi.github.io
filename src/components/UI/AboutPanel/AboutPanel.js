import React from "react";
import classes from "./AboutPanel.module.css";

const AboutPanel = ({ backgroundColor, auto = false, className, children }) => {
  const panelStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <div
      className={`${auto ? "h-auto" : ""} ${
        auto ? `sm:${classes.panel}` : classes.panel
      } flex xl:justify-between flex-col xl:flex-row justify-center items-center w-full ${className}`}
      style={panelStyle}
    >
      {children}
    </div>
  );
};

export default AboutPanel;
