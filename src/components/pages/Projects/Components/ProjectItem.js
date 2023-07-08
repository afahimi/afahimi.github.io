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
  faUser,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const IconText = ({ icon, children }) => (
  <div className={classes.iconWithText}>
    <FontAwesomeIcon icon={icon} />
    <P>{children}</P>
  </div>
);

const ProjectItem = (props) => {
  const content = (
    <>
      <H1 className={classes.typewriter}>{props.title}</H1>
      <br />
      <div className={classes.iconGroup}>
        <IconText icon={faClock}>{props.date}</IconText>
        <br />
        <IconText icon={faUser}>{props.people}</IconText>
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
      </div>
    </>
  );

  return (
    <AboutPanel backgroundColor={props.backgroundColor}>
      {props.right === true ? (
        <>
          <img
            src={props.img}
            alt="Project IMG"
            className={classes.profilePic}
          />
          <div className={classes.verticalLine} />
          <div className={classes.textSection}>
            <TextContainer>{content}</TextContainer>
          </div>
        </>
      ) : (
        <>
          <div className={classes.textSection}>
            <TextContainer>{content}</TextContainer>
          </div>
          <div className={classes.verticalLine} />
          <img
            src={props.img}
            alt="Project IMG"
            className={classes.profilePic}
          />
        </>
      )}
    </AboutPanel>
  );
};

export default ProjectItem;
