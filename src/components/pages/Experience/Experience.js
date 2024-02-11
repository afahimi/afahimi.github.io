import React from "react";
import ExperienceListing from "./ExperienceListing";

const Experience = () => {
  const experiences = [
    {
      name: "Boeing",
      title: "Software Engineering Intern",
      dates: "Jan 2023 - Present",
      description:
        "Engaged as a full-stack developer within Boeing's Flight Data Analytics team, focusing on the development and upkeep of web applications. These applications are instrumental in offering insights regarding aircraft performance and maintenance.",
      skills: [
        "React.js",
        "Typescript",
        "Node.js",
        "Flask",
        "Google Cloud Platform",
        "Docker",
      ],
      file: "boeing.jpg",
    },
    {
      name: "Trulioo",
      title: "Software Engineer in Test Intern",
      dates: "May 2023 - Dec 2023",
      description:
        "In the role of Software Engineer in Test at Trulioo, I was responsible for creating Selenium automation tests in Kotlin for Android, iOS, and Web platforms, as well as for their TensorFlow ML platform. My contributions included architecting CI pipelines that achieved a 90% increase in test coverage.",
      skills: [
        "Kotlin",
        "Selenium",
        "CI/CD",
        "Jetpack Compose",
        "PyTest",
        "TensorFlow",
        "Testrail",
      ],
      file: "trulioo.png",
    },
    {
      name: "UBC Uncrewed Aircraft Systems",
      title: "Software Developer",
      dates: "Sep 2021 - Present",
      description:
        "Developed a RESTful API for dynamic flight mission management, enabling real-time drone coordination. Utilized Python and Shapely for autonomous flight path calculation, avoiding exclusion zones. Built a React-based web application integrating live streaming with real-time control for use in competitions.",
      skills: [
        "RESTful API",
        "Python",
        "Shapely",
        "React",
        "TypeScript",
        "HTML",
        "CSS",
      ],
      file: "uas.jpg",
    },    
  ];

  return (
    <>
      <div className={`flex flex-col items-center h-screen py-5 gap-5`}>
        {experiences.map((experience) => (
          <ExperienceListing
            name={experience.name}
            title={experience.title}
            dates={experience.dates}
            description={experience.description}
            skills={experience.skills}
            file={experience.file}
          />
        ))}
      </div>
    </>
  );
};

export default Experience;
