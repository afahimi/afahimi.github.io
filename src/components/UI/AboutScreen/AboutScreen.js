import React from "react";
import AboutPanel from "../AboutPanel/AboutPanel";
import classes from "./AboutScreen.module.css";
import { H1, H3, P } from "../Elements/Typography/Typography";
import Bubble from "../Elements/Bubble/Bubble";
import TextContainer from "../Elements/TextContainer/TextContainer";
import SocialLinks from "../SocialLinks/SocialLinks";
const AboutScreen = (props) => {
  return (
    <AboutPanel backgroundColor={props.backgroundColor} className={`h-auto py-9`}>
      <div className={`${classes.bubbleWrapper}`}>
        <Bubble>About Me</Bubble>
      </div>
      <div className={`hidden xl:block ${classes.customBorder} border-custom-blue-lt border-solid mr-8`} />
      <div className={`${classes.textSectionContainer} flex flex-col lg:flex-row lg:gap-8`}>
        <TextContainer className="self-center mx-10 lg:mx-0 my-5">
          <P className={classes.textSection}>
            I'm a third year computer engineering student at the University of
            British Columbia. I have a strong passion for both hardware and
            software development, and I love to apply my creativity and
            analytical skills to create innovative solutions.
          </P>
          <br />
          <P className={classes.textSection}>
            I have worked on
            various projects that involve designing, building, testing, and
            debugging systems that integrate hardware, software, and firmware components.
            I'm always eager to learn new technologies and tools, and I aspire
            to become a versatile and competent engineer.
          </P>
          <br />
          <P className={classes.textSection}>
            When I'm not coding or
            tinkering with digital circuits, you can find me exploring nature by hiking,
            playing basketball, biking, diving into new tech, and reading. I
            hope you enjoy browsing my website!
          </P>
        </TextContainer>
        <div className="self-center lg:mr-24">
          <SocialLinks />
        </div>
      </div>
    </AboutPanel>
  );
};


export default AboutScreen;
