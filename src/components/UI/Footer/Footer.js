import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.links}>
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
      </div>
      <div className={classes.copywright}>
        © {new Date().getFullYear()} Amin Fahimi. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
