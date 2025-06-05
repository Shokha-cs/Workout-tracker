import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <section id="header_home">
      <img
        src="/images/homepage.jpg"
        alt="Fitness lifestyle"
        className="header-image"
      />
      <h1>MOMENTUM</h1>
      <h3>Get your free diet plan & workout plan</h3>
      <div className="buttons">
        <Link className="primary-btn" to="/about">
          About us
        </Link>
        <Link className="secondary-btn" to="/calculator">
          Calculator
        </Link>
      </div>
    </section>
  );
}

export default Header;
