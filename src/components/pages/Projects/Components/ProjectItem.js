import React from "react";
import classes from "./ProjectItem.module.css";
import AboutPanel from "../../../UI/AboutPanel/AboutPanel";
import TextContainer from "../../../UI/Elements/TextContainer/TextContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaGithub } from "react-icons/fa";
import { H1, P } from "../../../UI/Elements/Typography/Typography";
import Keyword from "./Keyword/Keyword";
import {
  faClock,
  faHouse,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const IconText = ({ icon, children }) => (
  <div className={classes.iconWithText}>
    <FontAwesomeIcon icon={icon} />
    <P>{children}</P>
  </div>
);

const ProjectItem = (props) => {
  const githubIcon = () => {
    if (props.hasref === true) {
      return (
        <div className={classes.githubicon}>
          <a
            href={props.href}
            target="_blank"
            className={classes.githubLink}
            rel="noreferrer"
          >
            <FaGithub className={classes.githubIcon} />
          </a>
        </div>
      );
    }
  };
  const content = (
    <>
      <H1 className={classes.typewriter}>{props.title}</H1>
      <br />
      <div className={classes.iconGroup}>
        <IconText icon={faClock}>{props.date}</IconText>
        <br />
        <IconText icon={faHouse}>{props.context}</IconText>
        <br />
        <IconText icon={faMapMarkerAlt}>{props.location}</IconText>
      </div>
      <div className={classes.paragraph}>
        <br />
        <P>{props.description}</P>
        <div className={classes.keywords}>
          {props.keywords.map((keyword, index) => (
            <Keyword key={index} keyword={keyword} />
          ))}
        </div>
        <br />
        {githubIcon()}
      </div>
    </>
  );

  return (
    <AboutPanel backgroundColor={props.backgroundColor} auto={true}>
      {props.right === true ? (
        <>
          <img
            src={props.img}
            alt="Project IMG"
            className={`${classes.profilePic} my-4`}
          />
          <div className={`${classes.verticalLine} h-80 hidden xl:block`} />
          <div className={`${classes.textSection} my-4`}>
            <TextContainer>{content}</TextContainer>
          </div>
        </>
      ) : (
        <>
          <div className={`${classes.textSection} my-4`}>
            <TextContainer>{content}</TextContainer>
          </div>
          <div className={`${classes.verticalLine} h-80 hidden xl:block`} />
          <img
            src={props.img}
            alt="Project IMG"
            className={`${classes.profilePic} my-4`}
          />
        </>
      )}
    </AboutPanel>
  );
};

export default ProjectItem;
