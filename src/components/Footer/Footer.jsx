import React from "react";
import "./Footer.css";
import facebook from "../../assets/footer/facebook.png"
import twitter from "../../assets/footer/twitter.png"
import instagram from "../../assets/footer/instagram.png"


const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-top">

        {/* LEFT */}
        <div className="footer-brand">
          <h2 className="logo">Trekora </h2>
          
          <p>
            Explore breathtaking destinations and plan your next adventure with Triva.
          </p>
        </div>

        {/* COMPANY */}
        <div className="footer-links">
          <h4>Company</h4>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
        </div>

        {/* SUPPORT */}
        <div className="footer-links">
          <h4>Support</h4>
          <a href="#">FAQ</a>
          <a href="#">Help Center</a>
          <a href="#">Terms & Conditions</a>
        </div>

        {/* SOCIAL */}
        <div className="footer-links">
          <h4>Follow Us</h4>
          <div className="social">
            <span>
              <a target="_blank" href="https://www.facebook.com/"><img  className="social-img" src={facebook} alt="" /></a>
              </span>
            <span>
              <a target="_blank" href="https://www.instagram.com/nikhil_bhadwal67/"><img className="social-img" src={instagram} alt="" /></a>
              </span>
            <span>
              <a target="_blank" href="https://x.com/"><img className="social-img" src={twitter} alt="" /></a>
              </span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Triva. All rights reserved.</p>
        <div className="policy">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;