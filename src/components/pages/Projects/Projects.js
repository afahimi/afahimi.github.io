import React from "react";
import NavBar from "../../UI/NavBar/NavBar";
import Footer from "../../UI/Footer/Footer";
import { H1 } from "../../UI/Elements/Typography/Typography";
import classes from "./Projects.module.css";
import TextContainer from "../../UI/Elements/TextContainer/TextContainer";
import ProjectItem from "./Components/ProjectItem";

const Projects = () => {
  return (
    <div className={classes.titleScreen}>
      <H1>Projects</H1>
      <br />
      <ProjectItem img="/images/ProjectImages/test.jpg" backgroundColor="#B2D4E1" title="Sample Project One"/>
    </div>
  );
};

export default Projects;
