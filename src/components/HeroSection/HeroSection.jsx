import React, { useState, useEffect, useRef, useCallback } from "react";
import { allPlaces } from "../../../constants/index.js";
import "./Hero.css";
import leftArrow from "../../assets/hero/left.png";
import rightArrow from "../../assets/hero/right.png";

const AUTO_SLIDE_INTERVAL = 5000;

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const total = allPlaces.length;

  const goToSlide = useCallback(
    (index) => {
      setCurrentIndex((index + total) % total);
    },
    [total],
  );

  const startAutoSlide = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, AUTO_SLIDE_INTERVAL);
  }, [total]);

  const stopAutoSlide = () => clearInterval(intervalRef.current);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [startAutoSlide]);

  const currentPlace = allPlaces[currentIndex];

  return (
    <div
      id="Hero"
      className="hero-content"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      <div className="hero-slides">
        {allPlaces.map((place, i) => (
          <div
            key={place.id}
            className={`hero-slide ${i === currentIndex ? "active" : ""}`}
          >
            <img src={place.image} alt={place.name} />
          </div>
        ))}
        <div className="hero-overlay" />
      </div>

      <div className="hero-text">
        <p className="hero-tag">Explore India</p>
        <h1 className="hero-title">{currentPlace.name}</h1>
        <p className="hero-sub">{currentPlace.title}</p>
        
      </div>
      <button className="hero-explore">Explore now</button>

      <div className="arrows">
        <button
          className="arrow-btn left"
          onClick={() => goToSlide(currentIndex - 1)}
          aria-label="Previous"
        >
          <img src={leftArrow} alt="prev" aria-hidden="true" />
        </button>
        <button
          className="arrow-btn right"
          onClick={() => goToSlide(currentIndex + 1)}
          aria-label="Next"
        >
          <img src={rightArrow} alt="next" aria-hidden="true" />
        </button>
      </div>

      <div className="dots">
        {allPlaces.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
