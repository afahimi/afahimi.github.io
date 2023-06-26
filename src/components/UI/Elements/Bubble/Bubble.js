import React from "react";
import classes from "./Bubble.module.css";
import { H1, H3 } from "../Typography/Typography";

function Bubble({ children }) {
  return (
    <div className={classes.bubble}>
      <H1>
      {children}
      </H1>
    </div>
  );
}

export default Bubble;
