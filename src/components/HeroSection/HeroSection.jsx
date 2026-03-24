import React, { useState, useEffect, useRef, useCallback } from "react";
import { allPlaces } from "../../../constants/index.js";
import "./Hero.css";
import leftArrow from "../../assets/hero/left.png";
import rightArrow from "../../assets/hero/right.png";

const AUTO_SLIDE_INTERVAL = 4000;

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const drag = useRef({ startX: 0, dragging: false, movedX: 0 });
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
 
  // ── Drag / swipe handlers ──────────────────────────────
  const onPointerDown = (e) => {
    stopAutoSlide();
    drag.current = { startX: e.clientX, dragging: false, movedX: 0 };
  };
 
  const onPointerMove = (e) => {
    drag.current.movedX = e.clientX - drag.current.startX;
    if (Math.abs(drag.current.movedX) > 6) {
      drag.current.dragging = true;
    }
  };
 
  const onPointerUp = () => {
    const { dragging, movedX } = drag.current;
    if (dragging) {
      if (movedX < -40) goToSlide(currentIndex + 1); // swipe left  → next
      if (movedX >  40) goToSlide(currentIndex - 1); // swipe right → prev
    }
    setTimeout(() => {
      drag.current.dragging = false;
      startAutoSlide();
    }, 50);
  };
 
  // Touch support
  const onTouchStart = (e) => {
    stopAutoSlide();
    drag.current = { startX: e.touches[0].clientX, dragging: false, movedX: 0 };
  };
 
  const onTouchMove = (e) => {
    drag.current.movedX = e.touches[0].clientX - drag.current.startX;
    if (Math.abs(drag.current.movedX) > 6) {
      drag.current.dragging = true;
    }
  };
 
  const onTouchEnd = () => onPointerUp();
  // ──────────────────────────────────────────────────────
 
  const currentPlace = allPlaces[currentIndex];
 
  return (
    <div
      id="Hero"
      className="hero-content"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={{ userSelect: "none" }}
    >
      <div className="hero-slides">
        {allPlaces.map((place, i) => (
          <div
            key={place.id}
            className={`hero-slide ${i === currentIndex ? "active" : ""}`}
          >
            <img src={place.image} alt={place.name} draggable={false} />
          </div>
        ))}
        <div className="hero-overlay" />
      </div>
 
      <div className="hero-text">
        <p className="hero-tag">Explore India</p>
        <h1 className="hero-title">{currentPlace.name}</h1>
        <p className="hero-sub">{currentPlace.title}</p>
      </div>
      <a href="#Treks" >
        <button
        className="hero-explore"
        onPointerDown={(e) => e.stopPropagation()}
      >
        Explore now
      </button>
      </a>
     
 
      <div className="arrows">
        <button
          className="arrow-btn left"
          onPointerDown={(e) => e.stopPropagation()}
          onClick={() => { stopAutoSlide(); goToSlide(currentIndex - 1); }}
          aria-label="Previous"
        >
          <img src={leftArrow} alt="prev" aria-hidden="true" />
        </button>
        <button
          className="arrow-btn right"
          onPointerDown={(e) => e.stopPropagation()}
          onClick={() => { stopAutoSlide(); goToSlide(currentIndex + 1); }}
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
            onPointerDown={(e) => e.stopPropagation()}
            onClick={() => { stopAutoSlide(); goToSlide(i); }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
 


export default HeroSection;
