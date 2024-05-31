import React from "react";
import "./footer.styles.css";

export const Footer = () => {
  return (
    <div className="footer">
      <span>
        <a
          href="https://github.com/shay122990"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github footer-icon"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/shay-asanova90/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin footer-icon"></i>
        </a>
      </span>
      <p className="footer-text"> © Shay Development 2024</p>
      <p className="footer-text">Dubai, UAE</p>
    </div>
  );
};
