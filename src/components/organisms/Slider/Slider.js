import React, { useState } from "react";
import "./Slider.scss";
import Slide from "components/atoms/Slide/Slide";
import Dot from "components/atoms/Dot/Dot";

const Slider = () => {
  const slides = [
    "../../../assets/img/slider/test.jpg",
    "../../../assets/img/slider/slider__bg1.svg",
  ];
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });
  const { activeIndex } = state;

  const handleDotClick = (index) => {
    setState({
      ...state,
      activeIndex: index,
      translate: (index - 1) * 100,
    });
  };
  return (
    <div className="slider">
      <div className="slider__content">
        {slides.map((url, index) => (
          <Slide
            key={index}
            bgi={url}
            activeIndex={activeIndex}
            index={index}
          />
        ))}
      </div>
      <div className="slider__dots">
        {slides.map((slide, index) => (
          <Dot
            key={index}
            index={index}
            activeIndex={activeIndex}
            click={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
