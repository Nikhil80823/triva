import React, { useState } from "react";
import "./Faq.css";

const faqs = [
  {
    q: "Do I need prior trekking experience?",
    a: "It depends on the trek. We have routes for complete beginners (Triund, Tungnath) all the way to advanced multi-day expeditions (Chadar, Kashmir Great Lakes). Each trek page clearly lists the fitness level required. Our team also helps you choose the right trek based on your experience.",
  },
  {
    q: "What is included in the package price?",
    a: "All our packages include experienced guides, porters, all meals during the trek, camping equipment (tents, sleeping bags, mats), necessary permits and fees, and basic first-aid support. Transport from the nearest major city is included in most packages — check individual trek pages for details.",
  },
  {
    q: "How do I prepare physically for a trek?",
    a: "We recommend starting preparation 4–6 weeks before your trek. Focus on cardio (running, cycling, swimming) 3–4 times a week, stair climbing with a weighted backpack, and leg-strengthening exercises. We send all booked trekkers a detailed preparation guide after booking.",
  },
  {
    q: "What is your cancellation and refund policy?",
    a: "Cancellations made 30+ days before the trek receive a full refund. 15–29 days: 75% refund. 7–14 days: 50% refund. Less than 7 days: no refund. In case of cancellations due to extreme weather or natural events, we offer a full credit towards any future trek valid for 12 months.",
  },
  {
    q: "Is altitude sickness a concern? How do you handle it?",
    a: "Altitude sickness is real and we take it seriously. Our guides are trained in altitude illness recognition and management. All high-altitude treks include mandatory acclimatization days. We carry supplemental oxygen and medications on every high-altitude expedition, and our protocols follow Wilderness Medicine guidelines.",
  },
  {
    q: "What should I pack? Is gear rental available?",
    a: "We provide a detailed packing list after booking. Essential personal items include warm layers, waterproof jacket, trekking boots, and sunscreen. We offer gear rental (trekking poles, crampons, gaiters, high-altitude sleeping bags) at reasonable rates — ideal if you're trying trekking for the first time.",
  },
  {
    q: "Are solo travellers welcome?",
    a: "Absolutely. A large portion of our trekkers are solo adventurers. Our small group format (max 12 people) means you'll quickly feel part of a community. Many of our solo trekkers end up making lifelong friends on the trail.",
  },
];

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