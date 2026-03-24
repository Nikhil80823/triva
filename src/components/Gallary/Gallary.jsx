import React from "react";

// ── Fix: import images so Vite resolves paths correctly ───────────────────
import imgChadar from "../../assets/gallary/gallary chadar.jpg";
import imgLakes from "../../assets/gallary/gallary lakes.jpg";
import imgTriund from "../../assets/gallary/gallary triund.jpg";
import imgKashmir from "../../assets/gallary/gallary kashmir.jpg";
import imgTungnath from "../../assets/gallary/gallary tungnath.jpg";

// ── Fix: import the plain CSS file ────────────────────────────────────────
import "./Gallery.css";

const Gallary = () => {
  return (
    // Outer section carries the dark background — full width, no max-width constraint
    <section id="Gallary" style={{ background: "#0c1a0e", position: "relative" }}>
      <div className="gallary">
        <div className="header">
          <p className="eyebrow">Captured Moments</p>
          <h2 className="heading">Trek Gallery</h2>
          <em className="headingItalic">
            "Captured journeys from India's most beautiful trails."
          </em>
        </div>
 
        <div className="top-grid">
          <div>
            <div className="noisy" />
            <img src={imgChadar} alt="Chadar trek" />
          </div>
          <div>
            <div className="noisy" />
            <img src={imgLakes} alt="Lakes trek" />
          </div>
          <div>
            <div className="noisy" />
            <img src={imgTriund} alt="Triund trek" />
          </div>
        </div>
 
        <div className="bottom-grid">
          <div>
            <div className="noisy" />
            <img src={imgKashmir} alt="Kashmir trek" />
          </div>
          <div>
            <div className="noisy" />
            <img src={imgTungnath} alt="Tungnath trek" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallary;
