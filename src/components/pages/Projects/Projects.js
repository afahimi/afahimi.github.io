import React from "react";
import NavBar from "../../UI/NavBar/NavBar";
import Footer from "../../UI/Footer/Footer";
import { H1 } from "../../UI/Elements/Typography/Typography";
import classes from "./Projects.module.css";
import TextContainer from "../../UI/Elements/TextContainer/TextContainer";
import ProjectItem from "./Components/ProjectItem";
import { ProjectList } from "./ProjectList.js";

const Projects = () => {
  return (
    <div className={classes.titleScreen}>
      <H1>Projects</H1>
      <br />
      {console.log(__dirname)}
      {ProjectList.map((project, index) => (
        <ProjectItem
          key={index}
          right={index % 2 === 0 ? true : false}
          backgroundColor={index % 2 === 0 ? "#B2D4E1" : "#CCE0E5"}
          {...project}
        />
      ))}
    </div>
  );
};

export default Projects;
