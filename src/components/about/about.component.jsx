import React from "react";
import "./about.styles.css";
import imageAbout from "../../media/about.png";

export const About = () => {
  return (
    <div className='about-container'>
      <img className='about-img' src={imageAbout} alt='' />
      <p className='about-info'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, dolores
        animi sapiente sequi quo praesentium in reiciendis distinctio corrupti
        labore non mollitia rerum amet rem. Asperiores quo ullam consequatur
        saepe. lorem ipsum dolor sit amet lorem. Cum sociis n Lorem ipsum dolor
        sit amet consectetur adipisicing elit. In inventore vero repellendus
        autem optio reprehenderit eum asperiores illo cum soluta!
      </p>
    </div>
  );
};
