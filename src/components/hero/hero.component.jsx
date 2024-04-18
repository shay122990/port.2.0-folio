import React from "react";
import "./hero.styles.css";
import image from "../../media/header.png";

export const Hero = () => {
  return (
    <div className='header'>
      <p className='header-text'>
        Hi, I'm Shay... <br />A front end developer in Dubai
      </p>
      <img className='header-img' src={image} alt='' />
    </div>
  );
};
