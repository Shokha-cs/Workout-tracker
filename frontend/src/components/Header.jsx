import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import favicon from "../assets/favicon.jpg"; // adjust path if needed

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

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
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/about">About Us</Link>
        <Link to="/suggestion">Suggestions</Link>
        {/* Dark Mode Toggle Button */}
        <button onClick={() => setIsDarkMode(!isDarkMode)} className="theme-switch">
          {isDarkMode ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
}

export default Header;
