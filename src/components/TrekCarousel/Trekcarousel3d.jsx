import React, { useState, useEffect, useRef } from "react";
import { ALL_TREKS, DIFFICULTY_CONFIG } from "../../../constants/index.js";
import styles from './TrekCarousel3D.module.css';


const SPREAD_X   = 305;  
const DEPTH_Z    = 110;  
const ARC_Y      = 15;   
const TILT_Y     = 40;  
const SIZE_STEP  = 0.15; 


const AUTO_INTERVAL = 4000;


function getCardTransform(offset, totalCards) {

 
  let off = offset;
  if (off >  totalCards / 2) off -= totalCards;
  if (off < -totalCards / 2) off += totalCards;

  const stepsAway = Math.abs(off);

  const translateX = off        * SPREAD_X;
  const translateZ = -stepsAway * DEPTH_Z;
  const translateY = -stepsAway * ARC_Y;
  const rotateY    = off        * TILT_Y;
  const scale      = Math.max(0.52, 1 - stepsAway * SIZE_STEP);
  const brightness = off === 0 ? 1 : Math.max(0.35, 0.6 - stepsAway * 0.1);

  
  const isVisible = stepsAway <= 1;

  return {
    zIndex:        10 - stepsAway,
    opacity:       isVisible ? (off === 0 ? 1 : 0.72) : 0,
    pointerEvents: isVisible ? "auto" : "none",
    filter:        `brightness(${brightness})`,
    transform: `
      translate(-50%, -50%)
      translateX(${isVisible ? translateX : 0}px)
      translateY(${isVisible ? translateY : 0}px)
      translateZ(${isVisible ? translateZ : -280}px)
      rotateY(${isVisible ? rotateY : 0}deg)
      scale(${isVisible ? scale : 0.4})
    `,
  };
}


function StarRow({ rating, reviews }) {
  return (
    <div className={styles.ratingRow}>
      
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          style={{ color: star <= Math.round(rating) ? "#c8902a" : "#e8ddd4" }}
        >
          ★
        </span>
      ))}
      <span className={styles.ratingNum}>{rating.toFixed(1)}</span>
      <span className={styles.ratingCount}>({reviews})</span>
    </div>
  );
}

function TrekCard({ trek, isActive, cardStyle, onClick }) {
  const diff = DIFFICULTY_CONFIG[trek.difficulty];

  return (
    <article
      className={`${styles.card} ${isActive ? styles.cardActive : ""}`}
      style={cardStyle}
      onClick={onClick}
    >
     
      <div className={styles.imagePanel}>
        <img
          src={trek.image}
          alt={trek.name}
          className={styles.image}
          loading="lazy"
          draggable={false}
        />
        
        <div className={styles.imageFade} />

        
        <span
          className={styles.diffBadge}
          style={{ color: diff.color, background: diff.bg, borderColor: diff.color }}
        >
          {trek.difficulty}
        </span>
      </div>

      
      <div className={styles.infoPanel}>
        <p className={styles.location}>{trek.location}</p>
        <h3 className={styles.trekName}>{trek.name}</h3>

        <StarRow rating={trek.rating} reviews={trek.reviews} />

        
        <div className={styles.chips}>
          <span className={styles.chip}>⏱ {trek.duration}</span>
          <span className={styles.chip}>⛰ {trek.difficulty}</span>
        </div>
        <div className={styles.info}>{trek.description}</div>

        
        <div className={styles.bottomRow}>
          <div>
            <p className={styles.priceLabel}>From</p>
            <p className={styles.price}>₹{trek.price.toLocaleString("en-IN")}</p>
          </div>
          <button
            className={styles.bookBtn}
            onClick={(e) => e.stopPropagation()} 
          >
            Book now
          </button>
        </div>
      </div>
    </article>
  );
}

// ─── Main carousel ─────────────────────────────────────────────────────────
export default function TrekCarousel3D() {
  const total = ALL_TREKS.length;

  // Which card is currently in the centre
  const [activeIndex, setActiveIndex] = useState(0);

  // Refs for the stage element and drag tracking
  const stageRef  = useRef(null);
  const autoTimer = useRef(null);
  const drag      = useRef({ dragging: false, startX: 0, movedX: 0 });

  // Move to any card index (wraps around)
  function goTo(index) {
    setActiveIndex(((index % total) + total) % total);
  }

  function goNext() { goTo(activeIndex + 1); }
  function goPrev() { goTo(activeIndex - 1); }

  // ── Auto-slide: restarts every time activeIndex changes ──
  useEffect(() => {
    autoTimer.current = setInterval(goNext, AUTO_INTERVAL);
    return () => clearInterval(autoTimer.current); // cleanup on unmount
  }, [activeIndex]);

  function stopAuto() {
    clearInterval(autoTimer.current);
  }

  // ── Keyboard: left/right arrows ──
  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowLeft")  { stopAuto(); goPrev(); }
      if (e.key === "ArrowRight") { stopAuto(); goNext(); }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex]);

  // ── Drag / swipe handlers ──
  function onPointerDown(e) {
    stopAuto();
    drag.current = { dragging: false, startX: e.clientX, movedX: 0 };
    stageRef.current?.setPointerCapture(e.pointerId);
  }

  function onPointerMove(e) {
    drag.current.movedX = e.clientX - drag.current.startX;
    if (Math.abs(drag.current.movedX) > 6) {
      drag.current.dragging = true;
    }
  }

  function onPointerUp() {
    const { dragging, movedX } = drag.current;
    if (dragging) {
      if (movedX < -40) goNext();   // dragged left  → go forward
      if (movedX >  40) goPrev();   // dragged right → go back
    }
    // Small delay so card click doesn't fire after a drag
    setTimeout(() => { drag.current.dragging = false; }, 50);
  }

  function handleCardClick(index) {
    if (!drag.current.dragging) {
      stopAuto();
      goTo(index);
    }
  }

  return (
    <section id="Treks" className={styles.section}>

      
      <div className={styles.header}>
        <p className={styles.eyebrow}>Handpicked for you</p>
        <h2 className={styles.heading}>Featured <em className={styles.headingItalic}>Treks</em></h2>
        <p className={styles.subheading}>Drag, swipe or use the arrows to explore</p>
      </div>

      
      <div
        ref={stageRef}
        className={styles.stage}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
      >
        {/*
          Cards are absolutely positioned inside this container.
          transform-style: preserve-3d makes children live in 3D space.
        */}
        <div className={styles.track}>
          {ALL_TREKS.map((trek, i) => (
            <TrekCard
              key={trek.id}
              trek={trek}
              isActive={i === activeIndex}
              cardStyle={getCardTransform(i - activeIndex, total)}
              onClick={() => handleCardClick(i)}
            />
          ))}
        </div>
      </div>

      {/* ── Navigation: arrows + dots ── */}
      <div className={styles.nav}>
        <button
          className={styles.navBtn}
          onClick={() => { stopAuto(); goPrev(); }}
          aria-label="Previous"
        >
          ←
        </button>

        {/* Dot for each card */}
        {ALL_TREKS.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ""}`}
            onClick={() => { stopAuto(); goTo(i); }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}

        <button
          className={styles.navBtn}
          onClick={() => { stopAuto(); goNext(); }}
          aria-label="Next"
        >
          →
        </button>
      </div>

    </section>
  );
}