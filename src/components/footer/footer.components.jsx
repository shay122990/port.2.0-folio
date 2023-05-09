import React from "react";
import "./footer.styles.css";

export const Footer = () => {
  return (
    <div className='footer'>
      <span>
        <a
          href='https://github.com/shay122990'
          target='_blank'
          rel='noreferrer'
        >
          <i class='fa-brands fa-github'></i>
        </a>
        <a
          href='https://www.linkedin.com/in/shay-asanova90/'
          target='_blank'
          rel='noreferrer'
        >
          <i class='fa-brands fa-linkedin'></i>
        </a>
      </span>
      <p> © Shay Development 2023</p>
      <p>Dubai, UAE</p>
    </div>
  );
};
