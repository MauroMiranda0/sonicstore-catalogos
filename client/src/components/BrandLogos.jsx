import React from 'react';
import { FaApple, FaGoogle, FaAmazon, FaMicrosoft, FaSpotify, FaPaypal } from 'react-icons/fa'; // Logos de ejemplo
import './BrandLogos.css';

const iconMap = {
  'Brand A': <FaApple />, 'Brand B': <FaGoogle />, 'Brand C': <FaAmazon />,
  'Brand D': <FaMicrosoft />, 'Brand E': <FaSpotify />, 'Brand F': <FaPaypal />,
};

function BrandLogos({ brands }) {
  return (
    <section className="brands-section">
      <div className="container">
        <h2 className="section-title">Comprar por Marca</h2>
        <div className="brand-logos-grid">
          {brands.map(brand => (
            <div key={brand.id} className="brand-logo-card">
              {iconMap[brand.name]}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandLogos;