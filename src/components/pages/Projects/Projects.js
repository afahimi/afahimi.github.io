import React from "react";
import NavBar from "../../UI/NavBar/NavBar";
import Footer from "../../UI/Footer/Footer";
import { H1 } from "../../UI/Elements/Typography/Typography";
import classes from "./Projects.module.css";
import TextContainer from "../../UI/Elements/TextContainer/TextContainer";
import ProjectItem from "./Components/ProjectItem";

const Projects = () => {
  const backgroundPicker = (index) => {
    if (index % 2 === 0) {
      return "#B2D4E1";
    } else {
      return "#CCE0E5";
    }
  }
  return (
    <div className={classes.titleScreen}>
      <H1>Projects</H1>
      <br />
      <ProjectItem
      right={true}
        date="January 31st, 2099"
        people="Amin, Ardi, Mercury"
        img="/images/ProjectImages/test.jpg"
        backgroundColor="#B2D4E1"
        title="Sample Project One"
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
        location="1234 Main Street, City, State, 12345"
        keywords={["React", "Embedded Systems", "API's"]}
        href="https://github.com/username"
      />
      <ProjectItem
      right={false}
        date="January 31st, 2099"
        people="Amin, Ardi, Mercury"
        img="/images/ProjectImages/test.jpg"
        backgroundColor="#CCE0E5"
        title="Sample Project One"
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
        location="1234 Main Street, City, State, 12345"
        keywords={["React", "Embedded Systems", "API's"]}
        href="https://github.com/username"
      />
    </div>
  );
};

export default Projects;
