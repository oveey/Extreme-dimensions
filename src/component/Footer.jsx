import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <section
      className="footer__section">
        <div className="footer">
          <div className="footer__content">
            <div className="footer__logo">
              <img
                src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720281552/logo_hblomh.png"
                alt=""
              />
              <p className="logo__text">
                Schedule a free consultation with us now.
              </p>
            </div>
            <ul className="footer__links">
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Service</Link>
              </li>
              <li>
                <Link to="/portfolio">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <div className="footer__social">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720304488/Facebook_wthbhy.svg"
                  alt=""
                />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720304509/Twitter_qsgqcb.svg"
                  alt=""
                />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720304498/Instagram_vlkpa4.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div className="footer__section2">
          <div className="footer__two">
            <p>
              &copy; {new Date().getFullYear()} Your Company Name. All rights
              reserved.
            </p>
            <ul className="footer__links2">
              <li>
                <a href="/terms">Terms</a>
              </li>
              <li>
                <a href="/privacy">Privacy policy</a>
              </li>
              <li>
                <a href="/cookies">Cookies</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
