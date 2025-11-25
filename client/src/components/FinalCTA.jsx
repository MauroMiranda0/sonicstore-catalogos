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
            <h2>Haz tu primer pedido y recibe un regalo</h2>
            <p>Arma tu pedido hoy, te bonificamos con un detalle especial en tu primera compra.</p>
            <Link to="/contact" className="cta-button">Quiero mi regalo</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
