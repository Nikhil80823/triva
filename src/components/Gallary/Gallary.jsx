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
    <div id="Gallary" className="gallary">
      <div className="header">
        <p className="eyebrow">CAPTURED MOMENTS</p>
        <h2 className="heading">Trek Gallery </h2>
        <h2>
          <em className="headingItalic">
            “Captured Journeys from India’s Most Beautiful Trails.”
          </em>
        </h2>
      </div>
      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src={imgChadar} alt="grid-img-1" />
        </div>

        <div className="md:col-span-6">
          <div className="noisy" />
          <img src={imgLakes} alt="grid-img-2" />
        </div>

        <div className="md:col-span-3">
          <div className="noisy" />
          <img src={imgTriund} alt="grid-img-5" />
        </div>
      </div>

      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy" />
          <img src={imgKashmir} alt="grid-img-3" />
        </div>

        <div className="md:col-span-4">
          <div className="noisy" />
          <img src={imgTungnath} alt="grid-img-4" />
        </div>
      </div>
    </div>
  );
};

export default Gallary;
