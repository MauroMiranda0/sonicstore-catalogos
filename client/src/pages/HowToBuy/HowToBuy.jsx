// client/src/pages/HowToBuy/HowToBuy.jsx
import React from 'react';
import HowToBuyContent from '../../components/HowToBuyContent';
import './HowToBuy.css';

function HowToBuy() {
  return (
    <div className="how-to-buy-page">
      <header className="page-header-alt">
        <div className="container">
          <h1>¿Cómo Comprar?</h1>
          <p className="page-subtitle">Comprar en SonicStore es fácil, rápido y seguro. Sigue estos simples pasos:</p>
        </div>
      </header>
      <div className="container">
        <HowToBuyContent />
      </div>
    </div>
  );
}

export default HowToBuy;