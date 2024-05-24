import React from "react";
import "./hero.styles.css";
import image from "../../media/header.png";

export const Hero = () => {
  return (
    <div className="header">
      <h1 className="header-text">
        Hi, I'm Shay... <br />A web developer in Dubai
      </h1>
      <img className="header-img" src={image} alt="developer" />
    </div>
  );
};
