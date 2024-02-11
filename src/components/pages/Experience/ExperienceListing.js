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
      className={`h-1/4 w-4/5 bg-custom-blue-item rounded-md ${classes.border}`}
    >
      <div className="flex flex-row gap-5">
        <img
          src={`/Images/ProjectImages/${file}`}
          alt="Experience IMG"
          className="h-36 w-36 mt-10 ml-6 rounded-md"
        />
        <div className="flex flex-col items-start justify-center mt-7">
          <h1 className="font-inter font-semibold text-slate-700 text-sdm">
            {name}
          </h1>
          <h1 className="font-inter font-semibold text-slate-700 text-sm italic mt-1">
            {title}
          </h1>
          <h1 className="font-inter font-semibold text-slate-700 text-sm italic">
            {dates}
          </h1>
          <p className="font-inter font-normal text-slate-700 text-sm mt-1">
            {description}
          </p>
          <div className="flex flex-row mt-2 gap-2">
            {skills.map((skill) => {
              return (
                <div className="font-inter font-normal text-slate-700 text-sm bg-slate-200 px-3 rounded-lg">
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
