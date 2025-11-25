// client/src/components/FloatingButton.jsx
import React, { useState } from 'react';
import { FaQuestion, FaPlus } from 'react-icons/fa';
import Modal from './Modal';
import HowToBuyContent from './HowToBuyContent'; // Crearemos este componente
import './FloatingButton.css';

function FloatingButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenAddProduct = () => {
    window.open('/add-product', '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <button 
        className="floating-btn" 
        onClick={() => setIsModalOpen(true)}
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

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="¿Cómo Comprar?"
      >
        <HowToBuyContent />
      </Modal>
    </>
  );
}

export default FloatingButton;
