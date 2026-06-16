import React, { useState, useEffect } from "react";
import './Navbar.css';
import logo from '../assets/logo.jpg';

function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`Navbar-container ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar">
        <div className="logo-section">
          <img src={logo} alt="HK Logo" className="logo-img" />
          <span className="logo-text">HARIKRISHNAN</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#home" className={activeSection === "home" ? "active" : ""}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className={activeSection === "about" ? "active" : ""}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" className={activeSection === "projects" ? "active" : ""}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className={activeSection === "contact" ? "active" : ""}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;