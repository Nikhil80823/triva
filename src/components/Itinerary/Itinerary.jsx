import React from "react";
import "./Itinerary.css";
import { itineraryData } from "../../../constants";

const Itinerary = () => {
  return (
    <section id="Itinerary" className="itinerary-section">
      <div className="itinerary-header">
        <h2>Trek Itinerary</h2>
        <p>Your day-by-day journey into the mountains</p>
      </div>

      <div className="itinerary-timeline">
        {itineraryData.map((item, i) => (
          <div
            key={i}
            className={`itinerary-row ${i % 2 === 0 ? "left" : "right"}`}
          >
            <div className="itinerary-dot">{item.day}</div>

            <div className="itinerary-card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <h3 className="itinerary-attention">
        <u>ATTENTION: </u> Itinerary may change as per trek, Contact us.
      </h3>
    </section>
  );
};

export default Itinerary;
