import React, { useState, useEffect } from "react";
import "./carousel.styles.css";

const Carousel = ({ slides }) => {
  const [slide, setSlide] = useState(0);
  const length = slides.length;

  const handlePrevious = () => {
    const newIndex = slide - 1;
    setSlide(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = slide + 1;
    setSlide(newIndex >= length ? 0 : newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [slide]);

  return (
    <div className="carousel">
      <div className="arrows">
        <button
          className="arrow"
          onClick={handlePrevious}
          aria-label="Previous Slide"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <div className="slide">
          <img src={slides[slide].image} alt={`Slide ${slides[slide].id}`} />
          <p>{slides[slide].paragraph}</p>
        </div>
        <button className="arrow" onClick={handleNext} aria-label="Next Slide">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <div className="indicators">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`indicator ${slide === i ? "active" : ""}`}
            onClick={() => setSlide(i)}
          >
            <i className="fa-regular fa-circle"></i>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
