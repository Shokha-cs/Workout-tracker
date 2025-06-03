import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/hello")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error("Error fetching from backend:", error);
      });
  }, []);

  return (
    <>
      <nav className="main-nav">
        <a href="/">Home</a>
        <a href="/calculator">Calculator</a>
        <a href="/about">About us</a>
        <a href="/suggestion">Suggestions</a>
      </nav>

      <section id="header_home">
        <img
          src="/images/homepage.jpg"
          alt="Fitness lifestyle"
          className="header-image"
        />
        <h1>MOMENTUM</h1>
        <h3>Get your free diet plan & workout plan</h3>
        <div className="buttons">
          <a className="primary-btn" href="/about">
            About us
          </a>
          <a className="secondary-btn" href="/calculator">
            Calculator
          </a>
        </div>
      </section>

      <section className="backend-section">
        <h2>Backend Message:</h2>
        <p>{message}</p>
      </section>

      <section id="box1">
        <h2>About website</h2>
        <p>Welcome to Momentum</p>

        <section id="quote_section">
          <blockquote>Will be motivation here</blockquote>
        </section>
      </section>

      <footer>
        <div className="footer-content">
          <img
            src="/images/favicon.jpg"
            alt="Something"
            className="footer-logo"
          />
          <nav className="footer-nav">
            <a href="/">Home</a>
            <a href="/calculator">Calculator</a>
            <a href="/about">About us</a>
            <a href="/suggestion">Suggestions</a>
          </nav>
        </div>
        <p>&copy; 2025 Momentum. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
