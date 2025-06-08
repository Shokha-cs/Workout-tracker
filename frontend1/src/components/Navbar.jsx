import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="main-nav">
      <Link to="/">Home</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/about">About us</Link>
      <Link to="/suggestion">Suggestions</Link>
    </nav>
  );
}

export default Navbar;
