import React from "react";
import "./about.styles.css";
import imageAbout from "../../media/about.png";

export const About = () => {
  return (
    <div className='about-container'>
      <img className='about-img' src={imageAbout} alt='' />
      <div className='about-info'>
      <p>
          Hi there 👋🏼, I'm Shay..
          <br />
          I have always been captivated by the intersection of technology and
          design, which is why I pursued a career in frontend development. With
          a deep understanding of frontend technologies like CSS, JavaScript,
          Reactjs, Figma, Wordpress and Firebase, I possess a strong foundation
          to bring your vision to life, where captivating design meets flawless
          functionality, speed and compatibility.
          <br />I am always eager to learn new tools and adapt to new environments.
          Staying on top of the latest trends of development and design to
          ensure I can deliver the best possible results for your company as
          well as personal projects.
        </p>
      </div>
    </div>
  );
};
