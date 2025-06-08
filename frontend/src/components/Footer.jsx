import React from "react";
import { Link } from "react-router-dom";
import favicon from "../assets/favicon.jpg"; // adjust path as needed
import facebookIcon from "../assets/facebook.svg";
import twitterIcon from "../assets/twitter.svg";
import linkedinIcon from "../assets/linkedin.svg";
import instagramIcon from "../assets/instagram.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Link to="/">
          <img src={favicon} alt="Momentum logo" className="footer-logo" />
        </Link>
        <nav className="footer-nav">
          <Link to="/">Home</Link>
          <Link to="/calculator">Calculator</Link>
          <Link to="/about">About Us</Link>
          <Link to="/suggestion">Suggestions</Link>
        </nav>

        <div className="footer-socials">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>

        <div className="footer-contact">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@momentum.com">info@momentum.com</a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+1234567890">+1 (234) 567-890</a>
          </p>
        </div>
      </div>
      <p className="footer-copy">&copy; 2025 Momentum. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
