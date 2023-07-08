import React from "react";
import classes from "./ProjectItem.module.css";
import AboutPanel from "../../../UI/AboutPanel/AboutPanel";
import TextContainer from "../../../UI/Elements/TextContainer/TextContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaGithub } from "react-icons/fa";
import { H1, H3, P } from "../../../UI/Elements/Typography/Typography";
import {
  faClock,
  faUser,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const IntroScreen = (props) => {
  return (
    <AboutPanel backgroundColor={props.backgroundColor}>
      <img src={props.img} alt="Profile" className={classes.profilePic} />
      <div className={classes.verticalLine} />
      <div className={classes.textSection}>
        <H1 className={classes.typewriter}>{props.title}</H1>
        <br />
        <TextContainer>
          <div className={classes.iconGroup}>
            <div className={classes.iconWithText}>
              <FontAwesomeIcon icon={faClock} />
              <P>January 31st, 2099</P>
            </div>
            <br />
            <div className={classes.iconWithText}>
              <FontAwesomeIcon icon={faUser} />
              <P>John Doe, CEO, LLC, and, Co.</P>
            </div>
            <br />
            <div className={classes.iconWithText}>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <P>1234 Main Street, City, State, 12345</P>
            </div>
          </div>
          <div className={classes.paragraph}>
            <br />
            <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </P>
            <br />
            <div className={classes.githubicon}>
              <a
                href="https://github.com/username"
                target="_blank"
                className={classes.githubLink}
                rel="noreferrer"
              >
                <FaGithub className={classes.githubIcon} />
              </a>
            </div>
          </div>
        </TextContainer>
      </div>
    </AboutPanel>
  );
};

export default IntroScreen;
