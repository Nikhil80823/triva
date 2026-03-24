import React, { useState } from "react";
import "./WhatsAppFloat.css";

export default function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false);

  const phone   = "8493825565";
  const message = encodeURIComponent("Hi! I'm interested in booking a trek with Triva. Can you help me?");
  const url     = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Chat on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Pulse rings */}
      <span className="wa-pulse" />
      <span className="wa-pulse wa-pulse-2" />

      {/* WhatsApp SVG icon */}
      <svg viewBox="0 0 32 32" className="wa-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 2C8.268 2 2 8.268 2 16c0 2.46.664 4.76 1.82 6.74L2 30l7.46-1.8A13.93 13.93 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.43 11.43 0 01-5.82-1.6l-.42-.25-4.42 1.06 1.1-4.3-.27-.44A11.45 11.45 0 014.5 16C4.5 9.648 9.648 4.5 16 4.5S27.5 9.648 27.5 16 22.352 27.5 16 27.5z"
          fill="white"
        />
        <path
          d="M22.1 19.4c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51l-.58-.01c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.19-.57-.34z"
          fill="white"
        />
      </svg>

      {/* Tooltip */}
      <span className={`wa-tooltip ${hovered ? "wa-tooltip-show" : ""}`}>
        Chat with us
      </span>
    </a>
  );
}