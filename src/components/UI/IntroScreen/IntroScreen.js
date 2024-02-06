import React from "react";
import AboutPanel from "../AboutPanel/AboutPanel";
import classes from "./IntroScreen.module.css";
import pfp from "../images/pfp3.png";
import Btn from "../Elements/Btn/Btn";

const IntroScreen = () => {
  const resumeClick = () => {
    window.open("/Amin_Resume.pdf", "_blank");
  };

  return (
    <AboutPanel>
      <img
        src={pfp}
        alt="Profile"
        className={`${classes.profilePic} h-2/5 w-auto xl:h-auto xl:w-80 xl:ml-14 2xl:ml-36 rounded-xl transition ease-in-out duration-500 hover:scale-110`}
      />
      <div
        className={`hidden xl:block ${classes.customBorder} border-solid border-custom-blue h-4/5 ml-0 xl:ml-24 2xl:ml-48`}
      />
      <div className={classes.textSection}>
        <div className="flex justify-center flex-col mt-9 ml-36 2xl:ml-36">
          <h1 className={`${classes.typewriter} text-xl md:text-2xl`}>
            👋 Hello, I am Amin!
          </h1>
          <h3 className="lg:text-lg text-md text-center">
            Welcome to my personal website.
          </h3>
          <div className="self-center mt-3">
            <Btn
              value="Download my Resume"
              className="prominent"
              onClick={resumeClick}
            />
          </div>
        </div>
      </div>
    </AboutPanel>
  );
};

export default IntroScreen;
