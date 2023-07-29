import React, { useState } from "react";
import classes from "./ContactForm.module.css";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0bgpeia",
        "template_ocnsui8",
        form.current,
        "dJCK86fw67UJAlXpv"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
          resetForm();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send email, please try again.");
        }
      );
  };

  const resetForm = () => {
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className={classes.contactForm}>
      <form ref={form} onSubmit={sendEmail} method="POST">
        <input
          type="email"
          className={classes.inputField}
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="user_email"
          required
        />
        <input
          type="text"
          className={classes.inputField}
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          name="user_name"
          required
        />
        <textarea
          className={classes.textArea}
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name="message"
          required
        />
        <input
          type="submit"
          className={classes.submitButton}
          value="Send Message"
        />
      </form>
    </div>
  );
};

export default ContactForm;
