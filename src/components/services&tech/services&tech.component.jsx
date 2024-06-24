import React from "react";
import Carousel from "../carousel/carousel.component";
import "./services&tech.styles.css";
import techBulletins from "../../services-data";

export const Services = () => {
  return (
    <div className="services-tech-container">
      <Carousel slides={techBulletins} />
    </div>
  );
};

export default Services;
