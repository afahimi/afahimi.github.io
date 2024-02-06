import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import TextContainer from "../Elements/TextContainer/TextContainer";
import classes from "./SocialLinks.module.css";

const SocialLinks = () => {
  return (
    <TextContainer className={`flex flex-row lg:flex-col gap-3 mt-5 lg:mt-0`}>
      <a href="mailto:afahimi@student.ubc.ca" className={classes.socialLink} target="_blank" rel="noreferrer">
        <FaEnvelope className={classes.socialIcon} />
      </a>
      <a href="https://github.com/afahimi" className={classes.socialLink} target="_blank" rel="noreferrer">
        <FaGithub className={classes.socialIcon} />
      </a>
      <a href="https://www.linkedin.com/in/aminfahiminia/" className={classes.socialLink} target="_blank" rel="noreferrer">
        <FaLinkedin className={classes.socialIcon} />
      </a>
      <a href="https://www.instagram.com/amin.guy/" className={classes.socialLink} target="_blank" rel="noreferrer">
        <FaInstagram className={classes.socialIcon} />
      </a>
    </TextContainer>
  );
};

export default SocialLinks;
