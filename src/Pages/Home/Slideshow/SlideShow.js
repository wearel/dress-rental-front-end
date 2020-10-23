// Import useState dan use Effect
import React, { useState, useEffect } from "react";
// Import CSS
import "../Slideshow/SlideShow.css";
// Import CarouelSlide.js
import CarouselSlide from "../Slideshow/SlideCarousel";
// Import constanta.js
import { SLIDE_INFO } from "../Slideshow/SlideData";
// Import react icons
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
// Import slide dari material UI
import Slide from "@material-ui/core/Slide";

function Arrow(props) {
  const { direction, clickFunction } = props;
  const icon = direction === "left" ? <AccessAlarmsIcon /> : <AccessTimeIcon />;

  return <div onClick={clickFunction}>{icon}</div>;
}

function App() {
  // useState
  const [index, setIndex] = useState(0);
  const content = SLIDE_INFO[index];
  const numSlides = SLIDE_INFO.length;

  const [slideIn, setSlideIn] = useState(true);
  const [slideDirection, setSlideDirection] = useState("down");

  const onArrowClick = (direction) => {
    const increment = direction === "left" ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;

    const oppDirection = direction === "left" ? "right" : "left";
    setSlideDirection(direction);
    setSlideIn(false);

    setTimeout(() => {
      setIndex(newIndex);
      setSlideDirection(oppDirection);
      setSlideIn(true);
    }, 500);
  };

  //   UseEffect
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Fungsi ke kanan
      if (e.keyCode === 39) {
        onArrowClick("right");
      }
      //   Fungsi ke kiri
      if (e.keyCode === 37) {
        onArrowClick("left");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className="slide">
      {/* Arrow ke kiri */}
      <Arrow direction="left" clickFunction={() => onArrowClick("left")} />

      {/* Testimoni */}
      <Slide in={slideIn} direction={slideDirection}>
        <div>
          <CarouselSlide content={content} />
        </div>
      </Slide>
      {/* Arrow ke kanan */}
      <Arrow direction="right" clickFunction={() => onArrowClick("right")} />
    </div>
  );
}

export default App;
