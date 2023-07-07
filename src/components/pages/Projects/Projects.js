import React from "react";
import NavBar from "../../UI/NavBar/NavBar";
import Footer from "../../UI/Footer/Footer";
import { H1 } from "../../UI/Elements/Typography/Typography";
import classes from "./Projects.module.css";
import TextContainer from "../../UI/Elements/TextContainer/TextContainer";

const Projects = () => {
  return (
    <div className={classes.titleScreen}>
      <H1>Projects</H1>
      <hr className={classes.hrstyle}/>
      <br />
    </div>
  );
};

export default Projects;
