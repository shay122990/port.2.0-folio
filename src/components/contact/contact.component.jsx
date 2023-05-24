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
          setError("Error occurred. Please try again later.");
          setMessage("");
          form.current.reset();
          setTimeout(() => {
            setError("");
          }, 6000);
        }
      );
  };

  return (
    <div className='container'>
      <div className='contact-info'>
        <h2>Get in Touch</h2>
        <p>
          If you have any questions or inquiries, please feel free to reach out
          to us using the form below. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eveniet pariatur, dolorum consectetur ipsa impedit
          harum cum assumenda odit voluptate commodi, quia non temporibus
          maiores ducimus nesciunt asperiores perferendis perspiciatis
          quibusdam.
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
