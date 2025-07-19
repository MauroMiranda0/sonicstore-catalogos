import React from 'react';
import { Link } from 'react-router-dom';
import './PromoBanners.css';

function PromoBanners({ banners }) {
  return (
    <section className="promo-section">
      <div className="container">
        <h2 className="section-title">Ofertas Destacadas</h2>
        <div className="promo-grid">
          {banners.map(banner => (
            <div key={banner.id} className="promo-card" style={{ backgroundColor: banner.backgroundColor, color: banner.textColor }}>
              <div className="promo-text">
                <h3>{banner.title}</h3>
                <p>{banner.description}</p>
                <Link to={banner.ctaLink} className="promo-cta">{banner.ctaText}</Link>
              </div>
              <div className="promo-image">
                <img src={banner.imageUrl} alt={banner.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PromoBanners;