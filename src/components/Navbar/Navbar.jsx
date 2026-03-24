import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/nav/logo.png";
import { Link, Element } from "react-scroll";
import menu_icon from "../../assets/nav/menu-icon.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />

      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link
            to="Hero"
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => setMobileMenu(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="Treks"
            smooth={true}
            offset={-80}
            duration={500}
            onClick={() => setMobileMenu(false)}
          >
            Treks
          </Link>
        </li>
        <li>
          <Link
            to="Gallary"
            smooth={true}
            offset={-55}
            duration={500}
            onClick={() => setMobileMenu(false)}
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            to="Itinerary"
            smooth={true}
            offset={-55}
            duration={500}
            onClick={() => setMobileMenu(false)}
          >
            Itinerary
          </Link>
        </li>
        <li>
          <Link
            to="FAQ"
            smooth={true}
            offset={-80}
            duration={500}
            onClick={() => setMobileMenu(false)}
          >
            FAQ
          </Link>
        </li>
        <li>
          <Link
            to="Contact"
            smooth={true}
            offset={-88}
            duration={500}
            onClick={() => setMobileMenu(false)}
          >
            Contact Us
          </Link>
        </li>
      </ul>

      {/* Auth buttons — desktop only */}
      <div className="nav-auth">
        <button className="nav-btn-login">Login</button>
        <button className="nav-btn-register">Register</button>
      </div>

      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};
export default Navbar;
