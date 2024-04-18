import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.styles.css";
import resumePDF from "../../media/resume.pdf";

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

export const Contact = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        setMessage(
          "Thank you, message sent successfully! I will get back to you shortly."
        );
      },
      (error) => {
        setError(
          <>
            Oops, an error occurred whilst sending the message. <br />
            Please contact me via LinkedIn{" "}
            <a
              href="https://www.linkedin.com/in/shay-asanova90/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin error-icon"></i>
            </a>
          </>
        );
      }
    );
    e.target.reset();
  };

  return (
    <div className="container">
      <div className="contact-info">
        <h2>Get in Touch</h2>
        <p>
          Lets get coffee... 😃 <br />
          I would love to connect and discuss my contribution to your project or
          organization. <br />
          If you are a client, let's start by understanding your requirements,
          and goals. Please fill out the form, and I will get back to you
          promptly. <br /> And if you're a recruiter, I appreciate your interest
          in my profile. You can download my resume below.
          <br />
          Looking forward to hearing from you. Have a fantastic day!
        </p>
        <a href={resumePDF} download="resume.pdf" className="resume-button">
          Download Resume
        </a>
      </div>
      <div className="form-container">
        <form onSubmit={handleOnSubmit}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" className="submit-button" />
        </form>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};
