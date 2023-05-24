import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.styles.css";
import resumePDF from "../../media/resume.pdf";

export const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const { user_name, user_email, message } = form.current.elements;

    if (
      user_name.value.trim() === "" ||
      user_email.value.trim() === "" ||
      message.value.trim() === ""
    ) {
      setError("Please complete all fields before sending.");
      setMessage("");
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          setMessage("Message sent successfully!");
          setError("");
          form.current.reset();
          setTimeout(() => {
            setMessage("");
          }, 6000);
        },
        (error) => {
          setError(
            <>
              Oops, an error occurred while sending the message. <br />
              Please contact me via LinkedIn{" "}
              <a
                href='https://www.linkedin.com/in/shay-asanova90/'
                target='_blank'
                rel='noreferrer'
              >
                <i className='fa-brands fa-linkedin error-icon'></i>
              </a>
            </>
          );
          setMessage("");
          form.current.reset();
        }
      );
  };

  return (
    <div className='container'>
      <div className='contact-info'>
        <h2>Get in Touch</h2>
        <p>
          Lets get coffee... I'm sure theres a new one that just opened as you
          read this. (Dubai eh?). <br />
          Thank you for your interest! I would love to connect and discuss how I
          can contribute to your project or organization. <br />
          If you are a client, let's start by understanding your requirements
          and goals. Please fill out the form, and I will get back to you
          promptly. <br /> And if you're a recruiter, I appreciate your interest
          in my profile. You can download my resume by clicking the button
          below.
          <br />
          Thank you for considering me. Have a fantastic day!
        </p>
        <a href={resumePDF} download='resume.pdf'>
          <button className='resume-button'>Download Resume</button>
        </a>
      </div>
      <div className='form-container'>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type='text' name='user_name' />
          <label>Email</label>
          <input type='email' name='user_email' />
          <label>Message</label>
          <textarea name='message' />
          <input type='submit' value='Send' className='submit-button' />
        </form>
        {message && <p className='success-message'>{message}</p>}
        {error && <p className='error-message'>{error}</p>}
      </div>
    </div>
  );
};
