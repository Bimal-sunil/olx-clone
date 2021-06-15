import React, { useRef, useState } from "react";
import Card from "../Cards/Card";
import "./Slider.css";

function Slider() {
  const [position, setPosition] = useState("start");
  const trackRef = useRef();
  const nextClickedRef = useRef(0);
  const prevClickedRef = useRef(2);
  // We need 12 cards with 4 cards in one show. i.e total of 3 shows.
  // We have a slide track which contains 4 cards in it
  // On click next we need to move the slide track to right
  const nextSlide = () => {
    // Maintain the left arrow click and right arrow click when the page slides
    nextClickedRef.current = nextClickedRef.current + 1;
    prevClickedRef.current = prevClickedRef.current - 1;
    // Only slides if the no.of clicks is less than 3
    if (nextClickedRef.current < 3) {
      trackRef.current.style.transform = `translateX(-${
        74.2 * nextClickedRef.current
      }em)`;
      setPosition("mid");
    } 
    if (nextClickedRef.current === 2) {
      setPosition("end");
    }   // To hide the next arrow at the right end
  };
  // Done
  // On click previous we need to move the slide track to left
  const prevSlide = () => {
    // Maintain the left arrow click and right arrow click when the page slides
    prevClickedRef.current = prevClickedRef.current + 1;
    nextClickedRef.current = nextClickedRef.current - 1;
    // Only slides if the no.of clicks is less than 3
    if (prevClickedRef.current < 3) {
      trackRef.current.style.transform = `translateX(-${
        74.2 * (nextClickedRef.current)
      }em)`;
      setPosition("mid");
    }
    if (prevClickedRef.current === 2) {
      setPosition("start");
    }   // To hide the prev arrow at the left end
  };
  // Done
  return (
    <div className="slider">
      {position !== "start" && (
        <i className="fas fa-chevron-left" onClick={prevSlide}></i>
      )}
      <div className="head">
        <h1 className="title">Based on your last search</h1>
        <h6>View more</h6>
      </div>
      <div className="slider_container">
        <ul className="slider__track" ref={trackRef}>
          <li className="slider__items">
            <Card />
          </li>
          <li className="slider__items">
            <Card />
          </li>
          <li className="slider__items">
            <Card />
          </li>
          <li className="slider__items">
            <Card />
          </li>
          <li className="slider__items">
            <Card />
          </li>
          <li className="slider__items">
            <Card />
          </li>
          <li className="slider__items">
            <Card />
          </li>
          <li className="slider__items">
            <Card />
          </li>
          <li className="slider__items">
            <Card />
          </li>
          <li className="slider__items">
            <Card />
          </li>
          <li className="slider__items">
            <Card />
          </li>
          <li className="slider__items">
            <Card />
          </li>
        </ul>
      </div>
      {position !== "end" && (
        <i className="fas fa-chevron-right" onClick={nextSlide}></i>
      )}
    </div>
  );
}

export default Slider;


// Finished