import React, { useState } from "react";
import { Link } from "react-router-dom";
import favicon from "../assets/favicon.jpg"; // logo image

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav-bar">
      <img src={favicon} alt="Momentum logo" className="logo" />

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/calculator" onClick={() => setMenuOpen(false)}>Calculator</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
        <Link to="/suggestion" onClick={() => setMenuOpen(false)}>Suggestions</Link>
      </div>
    </nav>
  );
}

export default Header;
