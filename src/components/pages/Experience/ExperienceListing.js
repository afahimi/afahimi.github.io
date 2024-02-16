import React from "react";
import classes from "./Experience.module.css";

const ExperienceListing = ({
  name,
  title,
  dates,
  description,
  skills,
  file,
}) => {

  return (
    <div
      className={`py-3 px-2 h-auto xl:w-4/5 w-auto mx-5 xl:mx-0 bg-custom-blue-item rounded-md ${classes.border}`}
    >
      <div className="flex xl:flex-row xl:gap-5 flex-col items-center xl:items-start">
        <img
          src={`/Images/ProjectImages/${file}`}
          alt="Experience IMG"
          className="h-36 w-36 mt-5 xl:mt-10 xl:ml-6 rounded-md"
        />
        <div className="flex flex-col xl:items-start items-center justify-center mt-7">
          <h1 className="font-inter font-semibold text-slate-700 text-sdm text-center xl:text-start">
            {name}
          </h1>
          <h1 className="font-inter font-semibold text-slate-700 text-sm italic mt-1">
            {title}
          </h1>
          <h1 className="font-inter font-semibold text-slate-700 text-sm italic">
            {dates}
          </h1>
          <p className="font-inter font-normal text-slate-700 text-xs xl:text-sm mt-1 text-center xl:text-justify">
            {description}
          </p>
          <div className="flex flex-row flex-wrap 2xl:flex-nowrap mt-2 gap-2 justify-center xl:justify-start">
            {skills.map((skill) => {
              return (
                <div className="font-inter font-normal text-slate-700 text-xs xl:text-sm bg-slate-200 p-1 xl:px-3 rounded-lg">
                  {skill}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceListing;
