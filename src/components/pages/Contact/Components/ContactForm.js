import React, { useState } from 'react';
import axios from 'axios';
import classes from './ContactForm.module.css';

const ContactForm = () => {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        axios({
            method: "POST",
            url:"http://localhost:3002/send", //TODO change this to the actual url
            data: {
                email: email,
                subject: subject,
                message: message
            }
        }).then((response)=>{
            if (response.data.status === 'success'){
                alert("Message Sent.");
                resetForm()
            } else if(response.data.status === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    const resetForm=()=>{
        setEmail("");
        setSubject("");
        setMessage("");
    }

    return (
        <div className={classes.contactForm}>
            <form onSubmit={handleSubmit} method="POST">
                <input type="email" className={classes.inputField} placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <input type="text" className={classes.inputField} placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} required/>
                <textarea className={classes.textArea} placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required/>
                <input type="submit" className={classes.submitButton} value="Send Message"/>
            </form>
        </div>
    );
}

export default ContactForm;
