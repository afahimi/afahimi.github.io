import React from "react";
import "./TextBox.module.css";
import { H1, H3 } from "../Typography/Typography";

const TextBox = ({ title, body }) => {
  return (
    <div className="textBox">
      <H1>{title}</H1>
      <hr />
      <p>{body}</p>
    </div>
  );
};

export default TextBox;
