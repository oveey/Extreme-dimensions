import React, { useEffect } from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export const Footer = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000, // Duration of the animation in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
      startEvent: "DOMContentLoaded", // Trigger animations when the DOM is fully loaded
      offset: 120, // Adjust this value as needed
    });
  }, []);

  return (
    <>
      <section className="footer__section">
        <div className="footer">
          <div className="footer__content" data-aos="fade-up" >
            <div className="footer__logo">
              <img
                src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720281552/logo_hblomh.png"
                alt=""
              />
              <p className="logo__text">
                We design and construct innovative buildings.
              </p>
            </div>
            <ul className="footer__links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/service">Service</Link>
              </li>
              <li>
                <Link to="/contact">Gallery</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
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
              {/* <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720304509/Twitter_qsgqcb.svg"
                  alt=""
                />
              </a> */}
              <a
                href="https://www.instagram.com/xtremedimension/"
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
          <div className="footer__two"data-aos="fade-up" >
            <p>
              &copy; {new Date().getFullYear()} Extremedimension. All rights
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
