// Carousel.js
import React, { useState } from 'react';
import '../styles/carousel.css'

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };
  

  return (
    <div className="carousel">
      <button className="carousel-button left" onClick={prevSlide}>‹</button>
      <img src={images[currentIndex]} alt="carousel-slide" />
      <button className="carousel-button right" onClick={nextSlide}>›</button>
    </div>
  );
};

export default Carousel;
