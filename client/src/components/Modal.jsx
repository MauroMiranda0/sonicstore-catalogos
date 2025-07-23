// client/src/components/Modal.jsx
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './Modal.css';

function Modal({ isOpen, onClose, children, title }) {
  // Si el modal no está abierto, no renderizamos nada.
  if (!isOpen) return null;

  return (
    // 'portal' es ideal aquí, pero para simplificar lo haremos así por ahora.
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="modal-close-btn" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;