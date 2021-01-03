import React from "react";

const Dot = ({ index, activeIndex, click }) => {
  return (
    <span
      className={`slider__dot ${
        activeIndex === index ? "slider__dot--active" : ""
      }`}
      onClick={click}
    />
  );
};

export default Dot;
