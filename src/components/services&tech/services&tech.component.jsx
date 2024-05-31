// Services.jsx
import React from "react";
import Carousel from "../carousel/carousel.component";
import "./services&tech.styles.css";

export const Services = () => {
  const techBulletins = [
    <p>
      Proficient in HTML5, CSS3, and JavaScript, with a solid understanding of
      their latest specifications and best practices.
    </p>,
    <p>
      Expertise in frontend frameworks such as React.js, enabling the
      development of dynamic and interactive user interfaces.
    </p>,
    <p>
      Prioritizing seamless user experiences across various devices and screen
      sizes.
    </p>,
    <p>
      Skilled in optimizing website performance through techniques like code
      minification, image optimization, and caching.
    </p>,
    <p>
      Understanding of SEO principles and implementation techniques to optimize
      websites for search engines. Prioritizing semantic code for best
      accessibility practices.
    </p>,
    <p>
      Experience with WordPress development, for clients that need a simple and
      beautiful website within a short time.
    </p>,
  ];

  return (
    <div className="services-tech-container">
      <Carousel slides={techBulletins} />
    </div>
  );
};
