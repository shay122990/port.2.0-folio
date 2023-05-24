import React from "react";
import "./about.styles.css";
import imageAbout from "../../media/about.png";

export const About = () => {
  return (
    <div className='about-container'>
      <img className='about-img' src={imageAbout} alt='' />
      <div className='about-info'>
        <p>
          Hey, I'm Shay... I have always been captivated by the intersection of
          technology and design, which is why I pursued a career in frontend
          development. With a deep understanding of frontend technologies like
          HTML, CSS, JavaScript,Reactjs, Figma, Wordpress and Firebase, I
          possess a strong foundation to bring your vision to life. But what
          truly fuels my fire is the opportunity to infuse each project with my
          own personal touch and creativity. If you're looking for a frontend
          developer who brings together technical prowess, design finesse, and a
          passion for creating unforgettable web experiences, I am here to bring
          your vision to life. Let's embark on a journey of digital enchantment,
          where captivating design meets flawless functionality, resulting in a
          website that sets your brand apart. What truly sets me apart is my
          unwavering dedication to collaboration and continuous improvement. I
          love working closely with teams, bouncing ideas off each other, and
          pushing boundaries together. I am always eager to learn new
          technologies and techniques, staying on top of the latest trends to
          ensure I can deliver the best possible results for your company as
          well as personal projects.
        </p>
      </div>
    </div>
  );
};
