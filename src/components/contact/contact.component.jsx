import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.styles.css";

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

export const Contact = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.user_name.trim() ||
      !formData.user_email.trim() ||
      !formData.user_message.trim()
    ) {
      setError("All fields are required.");
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        setMessage(
          "Thank you, message sent successfully! I will get back to you shortly."
        );
        setError("");
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
    setFormData({
      user_name: "",
      user_email: "",
      user_message: "",
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h3>Let's Grab a Coffee! ☕️ </h3>
        <p>
          I'm excited about the possibility of collaborating with you on your
          project or contributing to your organization's success. Let's connect
          and chat about how I can bring your vision to life. <br /> Please fill
          out the form below, and I'll be in touch shortly. Looking forward to
          our conversation!
        </p>
      </div>
      <div className="form-container">
        <form onSubmit={handleOnSubmit}>
          <div>
            <span id="name-label">Name</span>
            <input
              type="text"
              id="user_name"
              name="user_name"
              aria-labelledby="name-label"
              value={formData.user_name}
              onChange={handleChange}
            />
          </div>

          <div>
            <span id="email-label">Email</span>
            <input
              type="email"
              id="user_email"
              name="user_email"
              aria-labelledby="email-label"
              value={formData.user_email}
              onChange={handleChange}
            />
          </div>

          <div>
            <span id="message-label">Message</span>
            <textarea
              id="user_message"
              name="user_message"
              aria-labelledby="message-label"
              value={formData.user_message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button value="Send" type="submit" className="submit-button">
            Submit
          </button>
        </form>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};
