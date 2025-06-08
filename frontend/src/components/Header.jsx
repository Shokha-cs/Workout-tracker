import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import favicon from "../assets/favicon.jpg";
import hamburger from "../assets/hamburger.svg";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("darkmode");
    } else {
      document.body.classList.remove("darkmode");
    }
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <nav className="nav-bar">
      <img src={favicon} alt="Momentum logo" className="logo" />

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link to="/calculator" onClick={() => setMenuOpen(false)}>
          Calculator
        </Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>
          About Us
        </Link>
        <Link to="/suggestion" onClick={() => setMenuOpen(false)}>
          Suggestions
        </Link>
        <button
          onClick={() => {
            setIsDarkMode(!isDarkMode);
            setMenuOpen(false);
          }}
          className="theme-switch"
        >
          {isDarkMode ? "Light" : "Dark"}
        </button>
      </div>

      <button
        className="hamburger"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle Menu"
      >
        <img src={hamburger} alt="Menu icon" />
      </button>
    </nav>
  );
}

export default Header;
