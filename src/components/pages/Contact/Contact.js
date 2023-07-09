import React from "react";
import { H1 } from "../../UI/Elements/Typography/Typography";
import ContactForm from "./Components/ContactForm";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <div className={classes.titleText}>
        <H1>Let's Keep in Touch!</H1>
      </div>
      <div className={classes.cform}>
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
