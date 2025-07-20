// client/src/components/FinalCTA.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './FinalCTA.css';
import ctaImage from '../assets/hero-product-2.jpg'; // Reutilizamos una imagen

function FinalCTA() {
  return (
    <section className="final-cta-section">
      <div className="container">
        <div className="cta-content">
          <div className="cta-image">
            <img src={ctaImage} alt="Nuevos productos" />
          </div>
          <div className="cta-text">
            <h2>¿Ya conoces nuestros productos nuevos?</h2>
            <p>La última moda y los mejores artículos para tu hogar te están esperando.</p>
            <Link to="/products" className="cta-button">Ver catálogo ahora</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;