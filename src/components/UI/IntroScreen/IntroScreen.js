import React from "react";
import AboutPanel from "../AboutPanel/AboutPanel";
import classes from "./IntroScreen.module.css";
import pfp from "../images/pfp.jpeg";

const IntroScreen = () => {
  return (
    <AboutPanel>
      <img src={pfp} alt="Profile" className={classes.profilePic} />
      <div className={classes.verticalLine}/>
      <div className={classes.textSection}>
        <h1>👋 Hello, I am Amin!</h1>
        <h3>Welcome to my personal website.</h3>
      </div>
    </AboutPanel>
  );
};

export default IntroScreen;
