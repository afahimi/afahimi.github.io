import React from "react";
import AboutPanel from "../AboutPanel/AboutPanel";
import classes from "./IntroScreen.module.css";
import pfp from "../images/pfp.jpeg";
import Btn from "../Elements/Btn/Btn";

const IntroScreen = () => {
  return (
    <AboutPanel>
      <img src={pfp} alt="Profile" className={classes.profilePic} />
      <div className={classes.verticalLine} />
      <div className={classes.textSection}>
        <h1 className={classes.typewriter}>👋 Hello, I am Amin!</h1>
        <h3>Welcome to my personal website.</h3>
        <div className={classes.btnContainer}>
          {/* <Btn value="Download my Resume" className="prominent" /> */}
        </div>
      </div>
    </AboutPanel>
  );
};

export default IntroScreen;
