import React from "react";
import AboutPanel from "../AboutPanel/AboutPanel";
import classes from "./AboutScreen.module.css";
import { H1, H3 } from "../Elements/Typography/Typography";
import Bubble from "../Elements/Bubble/Bubble";
import TextContainer from "../Elements/TextContainer/TextContainer";
import SocialLinks from "../SocialLinks/SocialLinks";
//about screen for website flow
const AboutScreen = (props) => {
  return (
    <AboutPanel backgroundColor={props.backgroundColor}>
      <div className={classes.bubbleWrapper}>
        <Bubble>About Me</Bubble>
      </div>
      <div className={classes.verticalLine} />
      <div className={classes.textSectionContainer}>
        <TextContainer>
          <H3 className={classes.textSection}>
            I'm a third year computer engineering student at the University of
            British Columbia. I have a strong passion for both hardware and
            software development, and I love to apply my creativity and
            analytical skills to create innovative solutions.
          </H3>
          <br />
          <H3 className={classes.textSection}>
            I have worked on
            various projects that involve designing, building, testing, and
            debugging systems that integrate hardware, software, and firmware components.
            I'm always eager to learn new technologies and tools, and I aspire
            to become a versatile and competent engineer.
          </H3>
          <br />
          <H3 className={classes.textSection}>
            When I'm not coding or
            tinkering with digital circuits, you can find me exploring nature by hiking,
            playing basketball, biking, diving into new tech, and reading. I
            hope you enjoy browsing my website!
          </H3>
        </TextContainer>
        <div className={classes.links_container}>
          <SocialLinks />
        </div>
      </div>
    </AboutPanel>
  );
};


export default AboutScreen;
