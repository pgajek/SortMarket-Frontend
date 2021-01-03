import React from "react";
import "./Slide.scss";

const Slide = ({ bgi, children, activeIndex, index }) => {
  const slidePosition = `${activeIndex * 100}%`;
  return (
    <div
      className="slide"
      style={{
        backgroundImage: `url(${bgi})`,
        transform: `translateX(-${slidePosition})`,
        left: `${index * 100}%`,
      }}
    >
      {children}
    </div>
  );
};

export default Slide;
