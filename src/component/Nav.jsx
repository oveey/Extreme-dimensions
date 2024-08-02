import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/nav.css";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
      if (window.innerWidth > 900) {
        setIsOpen(false); // Close menu if resizing above 900px
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      <div className="home__nav">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720281552/logo_hblomh.png"
            alt=""
          />
        </Link>

        <ul className={` ${isOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/" className="nav_link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us" className="nav_link">
              About us
            </NavLink>
          </li>
          <li>
            <NavLink to="/service" className="nav_link">
              Our Services
            </NavLink>
          </li>

          <li>
            <NavLink to="/portfolio" className="nav_link">
              Portfolio
            </NavLink>
          </li>

          <li>
            <NavLink to="/gallery" className="nav_link">
              Gallery
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className="nav_link">
              Contact us
            </NavLink>
          </li>

          <div className="dropdown">
            <span className="colors"></span>
            <span className="colors"></span>
            <span className="colors"></span>
            <span className="colors"></span>
          </div>
        </ul>

        <button
          className={`${isOpen ? "menu" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </>
  );
};
