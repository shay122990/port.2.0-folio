// Carousel.jsx
import React, { useState, useEffect } from "react";
import "./carousel.styles.css";

const Carousel = ({ slides }) => {
  const [index, setIndex] = useState(0);
  const length = slides.length;

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="carousel">
      <div className="arrows">
        <button className="arrow" onClick={handlePrevious}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <div className="slide">{slides[index]}</div>
        <button className="arrow" onClick={handleNext}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <div className="indicators">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`indicator ${index === i ? "active" : ""}`}
            onClick={() => setIndex(i)}
          >
            <i class="fa-regular fa-circle"></i>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
