import React from "react";
import "./header.styles.css";
import image from "../../media/header.png";

export const Header = () => {
  return (
    <div className='header'>
      <p className='header-text'>
        Hi, I'm Shay... <br />A front end developer in Dubai
      </p>
      <img className='header-img' src={image} alt='' />
    </div>
  );
};
