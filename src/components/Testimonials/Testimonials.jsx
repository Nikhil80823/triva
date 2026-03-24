import React, { useState, useRef, useEffect } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../../constants";


function StarRow({ rating }) {
  return (
    <div className="t-stars">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} style={{ color: s <= rating ? "#c9973a" : "rgba(238,232,218,0.2)" }}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef(null);
  const total = testimonialsData.length;

  function goTo(i) { setActive(((i % total) + total) % total); }

  useEffect(() => {
    intervalRef.current = setInterval(() => setActive(p => (p + 1) % total), 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const t = testimonialsData[active];

  return (
    <section className="t-section">
      <div className="t-inner">

        <div className="t-header">
          <span className="t-eyebrow">What Trekkers Say</span>
          <h2 className="t-heading">Real <em>Stories</em></h2>
          <span className="t-divider" />
        </div>

        <div className="t-stage">
          {/* Large background quote mark */}
          <span className="t-quote-mark">"</span>

          <div className="t-card" key={active}>
            <StarRow rating={t.rating} />
            <p className="t-text">"{t.text}"</p>

            <div className="t-author">
              <div className="t-avatar">{t.initials}</div>
              <div>
                <p className="t-name">{t.name}</p>
                <p className="t-meta">{t.location} · <span>{t.trek}</span></p>
              </div>
            </div>
          </div>

          {/* Side previews */}
          <button className="t-prev" onClick={() => goTo(active - 1)} aria-label="Previous">‹</button>
          <button className="t-next" onClick={() => goTo(active + 1)} aria-label="Next">›</button>
        </div>

        {/* Dots */}
        <div className="t-dots">
          {testimonialsData.map((_, i) => (
            <button
              key={i}
              className={`t-dot ${i === active ? "t-dot-active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Stats row */}
        <div className="t-stats">
          <div className="t-stat">
            <span className="t-stat-num">1,200+</span>
            <span className="t-stat-label">Happy Trekkers</span>
          </div>
          <div className="t-stat-divider" />
          <div className="t-stat">
            <span className="t-stat-num">4.9</span>
            <span className="t-stat-label">Average Rating</span>
          </div>
          <div className="t-stat-divider" />
          <div className="t-stat">
            <span className="t-stat-num">50+</span>
            <span className="t-stat-label">Trek Routes</span>
          </div>
          <div className="t-stat-divider" />
          <div className="t-stat">
            <span className="t-stat-num">8+</span>
            <span className="t-stat-label">Years Experience</span>
          </div>
        </div>

      </div>
    </section>
  );
}