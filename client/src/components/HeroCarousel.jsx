// client/src/components/HeroCarousel.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './HeroCarousel.css';

function HeroCarousel({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (!slides || slides.length === 0) {
    return null; // No renderizar nada si no hay slides
  }
  
  const currentSlide = slides[currentIndex];

  return (
    <div className="hero-carousel" style={{ backgroundColor: '#F3F4F6' /* Un gris claro neutro */ }}>
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-pretitle">{currentSlide.pretitle}</p>
          <h1 className="hero-title">{currentSlide.title}</h1>
          <Link to={currentSlide.ctaLink} className="hero-cta-button">
            {currentSlide.ctaText}
          </Link>
          <div className="hero-navigation">
            <button onClick={goToPrevious} aria-label="Anterior"><FaArrowLeft /></button>
            <button onClick={goToNext} aria-label="Siguiente"><FaArrowRight /></button>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
             {/* Renderizamos todos los slides para la transición, pero solo mostramos el activo */}
             {slides.map((slide, index) => (
                <img
                  key={slide.id}
                  src={slide.imageUrl}
                  alt={slide.title}
                  className={`hero-image ${index === currentIndex ? 'active' : ''}`}
                />
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroCarousel;