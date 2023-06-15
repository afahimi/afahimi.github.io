import React from "react";
import AboutPanel from "../AboutPanel/AboutPanel";
import classes from "./AboutScreen.module.css";
import { H1, H3 } from "../Elements/Typography/Typography";
import TextBox from "../Elements/TextBox/TextBox";

const AboutScreen = (props) => {
  return (
    <AboutPanel backgroundColor={props.backgroundColor}>
      <H1>About Me</H1>
      <div className={classes.verticalLine} />
      <H3>
        I am a full-stack web developer with a passion for creating beautiful and functional websites.
      </H3>
    </AboutPanel>
  );
};

export default AboutScreen;
