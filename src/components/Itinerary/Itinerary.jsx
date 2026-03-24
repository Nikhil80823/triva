import React from "react";
import "./Itinerary.css";
import { itineraryData } from "../../../constants";

 
const Itinerary = () => {
  return (
    <section id="Itinerary" className="itinerary-section">
 
      <div className="itinerary-header">
        <span className="itinerary-eyebrow">Day by Day</span>
        <h2>Trek <em>Itinerary</em></h2>
        <p>Your journey into the mountains, mapped out</p>
        <span className="itinerary-divider" />
      </div>
 
      <div className="itinerary-timeline">
        {itineraryData.map((item, i) => (
          <div
            key={i}
            className={`itinerary-row ${i % 2 === 0 ? "left" : "right"}`}
          >
            <div className="itinerary-dot">{item.day}</div>
 
            <div className="itinerary-card">
              <span className="itinerary-card-day">{item.day}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
 
      <h3 className="itinerary-attention">
        <strong>ATTENTION:</strong> Itinerary may change as per trek — Contact us for the latest updates.
      </h3>
 
    </section>
  );
};

export default Itinerary;
