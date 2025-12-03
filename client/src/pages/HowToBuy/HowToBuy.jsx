// client/src/pages/HowToBuy/HowToBuy.jsx
import React from 'react';
import HowToBuyContent from '../../components/HowToBuyContent';
import './HowToBuy.css';

function HowToBuy() {
  return (
    <div className="how-to-buy-page">
      <header className="page-header-alt">
        <div className="container">
          <h1>Cómo comprar en nuestra tienda por catálogo</h1>
          <p className="page-subtitle">Sigue estos pasos sencillos para hacer tu pedido.</p>
        </div>
      </header>
      <div className="container">
        <HowToBuyContent />
      </div>
    </div>
  );
}

export default HowToBuy;
