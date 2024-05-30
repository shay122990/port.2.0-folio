import React from "react";
import "./logo-slider.styles.css";
import logos from "../../tech-icons";

const speed = 20000;

const LogoSlider = () => {
  return (
    <div className="inner">
      <div className="wrapper">
        <section style={{ "--speed": `${speed}ms` }}>
          {logos.map(({ id, imageUrl }) => (
            <div className="logo-img" key={id}>
              <img src={imageUrl} alt={id} />
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` }}>
          {logos.map(({ id, imageUrl }) => (
            <div className="logo-img" key={id}>
              <img src={imageUrl} alt={id} />
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` }}>
          {logos.map(({ id, imageUrl }) => (
            <div className="logo-img" key={id}>
              <img src={imageUrl} alt={id} />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default LogoSlider;
