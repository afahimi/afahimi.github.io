import React from "react";
import AboutPanel from "../AboutPanel/AboutPanel";
import classes from "./IntroScreen.module.css";
import pfp from "../images/pfp3.png";
import Btn from "../Elements/Btn/Btn";

const IntroScreen = () => {
  const resumeClick = () => {
    window.open("/Amin_Resume.pdf", "_blank")
  }

  return (
    <AboutPanel>
      <img src={pfp} alt="Profile" className={classes.profilePic} />
      <div className={classes.verticalLine} />
      <div className={classes.textSection}>
        <h1 className={classes.typewriter}>👋 Hello, I am Amin!</h1>
        <h3>Welcome to my personal website.</h3>
        <div className={classes.btnContainer}>
          <Btn value="Download my Resume" className="prominent" onClick={resumeClick}/>
        </div>
      </div>
    </AboutPanel>
  );
};

export default IntroScreen;
