import React from "react";
import Carousel from "../carousel/carousel.component";
import "./services&tech.styles.css";
import servicesData from "../../services-data";

export const Services = () => {
  return (
    <div className="services-tech-container">
      <Carousel slides={servicesData} />
    </div>
  );
};

export default Services;
