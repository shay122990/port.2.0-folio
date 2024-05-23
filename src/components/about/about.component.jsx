import React from "react";
import "./about.styles.css";
// import { ReactComponent as AnimatedBlob } from "../../media/blobanimation.svg";

export const About = () => {
  return (
    <div className="about-container">
      {/* <img className="about-img" src={imageAbout} alt="" /> */}
      {/* <AnimatedBlob className="about-img" /> */}
      <div className="about-info">
        <p>
          Hi again 👋🏼, I'm Shay..
          <br />
          I have always been captivated by the intersection of technology and
          design, which is why I pursued a career in frontend development.
          <br />
          With a deep understanding of frontend technologies , I possess a
          strong foundation to bring your vision to life, where captivating
          design meets flawless functionality, speed, compatibility and
          accessibility.
          <br />I am always learning and adapting to new tools and technologies.
          <br />
          Staying on top of the latest trends of development and design to
          ensure I can deliver the best possible results for your company as
          well as personal projects.
        </p>
      </div>
    </div>
  );
};
