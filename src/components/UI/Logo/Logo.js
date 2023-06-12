import React from "react";
import signatureImage from "../images/signature.png"
import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <button className={classes.logoButton}>
      <img src={signatureImage} alt="Signature" className={classes.logoImage}/>
    </button>
  );
};

export default Logo;
