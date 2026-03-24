import React, { useState } from "react";
import "./Faq.css";
import { faqs } from "../../../constants";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  function toggle(i) {
    setOpen(open === i ? null : i);
  }

  return (
    <section id="FAQ" className="faq-section">
      <div className="faq-inner">

        <div className="faq-header">
          <span className="faq-eyebrow">Got Questions?</span>
          <h2 className="faq-heading">Frequently <em>Asked</em></h2>
          <p className="faq-sub">Everything you need to know before hitting the trail.</p>
          <span className="faq-divider" />
        </div>

        <div className="faq-list">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`faq-item ${open === i ? "faq-open" : ""}`}
            >
              <button className="faq-q" onClick={() => toggle(i)}>
                <span>{item.q}</span>
                <span className="faq-icon">{open === i ? "−" : "+"}</span>
              </button>
              <div className="faq-a-wrap">
                <p className="faq-a">{item.a}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="faq-footer-note">
          Still have questions? <a href="#Contact">Reach out to us</a> — we reply within 24 hours.
        </p>

      </div>
    </section>
  );
}