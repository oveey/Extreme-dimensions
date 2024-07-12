import React from 'react'
import { Link , NavLink } from 'react-router-dom'
import '../styles/nav.css'
import { useState } from "react";


export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <>
     <div className="home__nav">
        <Link to='/'><img src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1720281552/logo_hblomh.png" alt="" /> </Link>

        <ul className={` ${isOpen ? "open" : ""}`}>
        <li>
            <NavLink to="/" className='nav_link'>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about-us" className='nav_link'>About us</NavLink>
          </li>
          <li>
            <NavLink to="/service" className='nav_link'>Service</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className='nav_link'>Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className='nav_link'>Contact us</NavLink>
          </li>

          <div className="dropdown">
            <span className="colors"></span>
            <span className="colors"></span>
            <span className="colors"></span>
            <span className="colors"></span>
          </div>
        </ul>

        <button className={`${isOpen ? "menu" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
        </button>
      </div>
    </>
  )
}
