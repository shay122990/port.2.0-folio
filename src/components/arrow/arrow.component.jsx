import React from "react";
import "./arrow.styles.css";

export const Arrow = () => {
  const scrollDown = () => {
    window.scrollBy({ top: 400, behavior: "smooth" });
  };

  return (
    <div className="arrow-container" onClick={scrollDown}>
      <i className="fa-solid fa-chevron-down"></i>
    </div>
  );
};
