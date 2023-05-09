import React from "react";
import "./divider.styles.css";

export const Divider = ({ text, id }) => {
  return (
    <div className='divider-container'>
      <span id={id}>{text}</span>
      <hr />
    </div>
  );
};

export default Divider;
