import React from "react";
import classes from "./Btn.module.css";

const Btn = (props) => {
  const combinedClasses = `${classes.btn} ${classes[props.className]}`;  // Changed this line
  return <button className={combinedClasses} onClick={props.onClick}>{props.value}</button>;
};

export default Btn;
