import React from "react";
import "./WhyChooseUs.css";
import { reasons } from "../../../constants";

export default function WhyChooseUs() {
  return (
    <section id="WhyUs" className="why-section">
      <div className="why-inner">

        <div className="why-header">
          <span className="why-eyebrow">Why Trek With Us</span>
          <h2 className="why-heading">The <em>Trekora</em> Difference</h2>
          <p className="why-sub">We don't just take you to the mountains. We change how you see them.</p>
          <span className="why-divider" />
        </div>

        <div className="why-grid">
          {reasons.map((r, i) => (
            <div className="why-card" key={i}>
              <div className="why-icon">{r.icon}</div>
              <h3 className="why-title">{r.title}</h3>
              <p className="why-desc">{r.desc}</p>
              <span className="why-card-num">0{i + 1}</span>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="why-cta">
          <p className="why-cta-text">Ready to experience the difference?</p>
          <a href="#Contact" className="why-cta-btn">Plan My Trek</a>
        </div>

      </div>
    </section>
  );
}