// client/src/components/FloatingButton.jsx
import React, { useState } from 'react';
import { FaQuestion } from 'react-icons/fa';
import Modal from './Modal';
import HowToBuyContent from './HowToBuyContent'; // Crearemos este componente
import './FloatingButton.css';

function FloatingButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button 
        className="floating-btn" 
        onClick={() => setIsModalOpen(true)}
        aria-label="¿Cómo comprar?"
      >
        <FaQuestion />
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