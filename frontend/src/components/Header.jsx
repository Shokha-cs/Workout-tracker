import React from "react";
import { Link } from "react-router-dom";
import favicon from "../assets/favicon.jpg"; // adjust path if needed

function Header() {
  return (
    <nav className="nav-bar">
      <Link to="/">
        <img src={favicon} alt="Momentum logo" className="logo" />
      </Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/about">About Us</Link>
        <Link to="/suggestion">Suggestions</Link>
      </div>
    </nav>
  );
}

export default Header;
