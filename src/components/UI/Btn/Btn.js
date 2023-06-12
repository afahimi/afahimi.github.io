import React from "react";
import classes from "./Btn.module.css";

const Btn = (props) => {
  return <button className={classes.btn}>{props.value}</button>;
};

export default Btn;
