// client/src/components/FloatingButton.jsx
import React from 'react';
import { FaQuestion, FaPlus } from 'react-icons/fa';
import './FloatingButton.css';

function FloatingButton({ onHowToBuyClick }) {
  const handleOpenAddProduct = () => {
    window.open('/add-product', '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <button
        className="floating-btn"
        onClick={onHowToBuyClick}
        aria-label="¿Cómo comprar?"
      >
        <FaQuestion />
      </button>

      <button
        className="floating-btn secondary"
        onClick={handleOpenAddProduct}
        aria-label="Agregar producto"
      >
        <FaPlus />
      </button>
    </>
  );
}

export default FloatingButton;
