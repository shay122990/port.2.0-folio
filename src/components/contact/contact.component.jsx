import { useState } from "react";
import emailjs from "@emailjs/browser";
import ContactForm from "../form/contact-form.component";
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
    message: "",
  });
  const isEmailValid = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

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
      !formData.message.trim()
    ) {
      setError("All fields are required. Please fill out the form completely.");
      return;
    }
    if (!isEmailValid(formData.user_email)) {
      setError("Please enter a valid email address.");
      return;
    }
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        setMessage(
          "Thank you, message sent successfully! I will get back to you shortly."
        );
        setError("");

        setFormData({
          user_name: "",
          user_email: "",
          message: "",
        });
        e.target.reset();
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
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <span>Let's Grab a Coffee! ☕️ </span>
        <p>
          I'm excited about the possibility of collaborating with you on your
          project or contributing to your organization's success. Let's connect
          and chat about how I can bring your vision to life. <br /> Please fill
          out the form below, and I'll be in touch shortly.
        </p>
      </div>
      <div className="form-container">
        <ContactForm
          formData={formData}
          handleChange={handleChange}
          handleOnSubmit={handleOnSubmit}
        />
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};
