import React, { useState } from "react";
import "./Slider.scss";
import Slide from "components/atoms/Slide/Slide";
import Dot from "components/atoms/Dot/Dot";
import { ReactComponent as Worker } from "assets/icons/Worker1.svg";

const Slider = () => {
  const slides = [
    "../../../assets/img/slider/slider__bg2.svg",
    "../../../assets/img/slider/test.jpg",
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
        {slides.map((url, index) => {
          if (index == 0) {
            return (
              <Slide
                key={index}
                bgi={url}
                activeIndex={activeIndex}
                index={index}
              >
                <div className="slide__container">
                  <h1 className="slide__header">Sort Market</h1>
                  <h2 className="slide__sideHeader">Twój market budowlany</h2>
                  <p className="slide__text">
                    Sort Market stanowi miejsce w którym znajdziesz wszystko
                    czego potrzebujesz aby przeprowadzić remont, drobną naprawę
                    czy też wybudować wymarzony dom.
                  </p>
                  <div className="slide__buttons">
                    <a className="btn">Produkty</a>
                    <a className="btn slide__btn">Wiecej...</a>
                  </div>
                </div>
                <Worker className="slide__worker" />
              </Slide>
            );
          } else {
            return (
              <Slide
                key={index}
                bgi={url}
                activeIndex={activeIndex}
                index={index}
              />
            );
          }
        })}
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
