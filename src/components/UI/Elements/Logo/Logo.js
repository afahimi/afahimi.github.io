import React from "react";
import signatureImage from "../../images/signature.png"
import classes from "./Logo.module.css";

const Logo = ({className}) => {
  return (
    <button className={`${classes.logoButton} ${className}`}>
      <img src={signatureImage} alt="Signature" className={classes.logoImage}/>
    </button>
  );
};

export default Logo;