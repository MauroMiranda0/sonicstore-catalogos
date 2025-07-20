// client/src/pages/NotFound/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found-page">
      <div className="container not-found-content">
        <div className="not-found-icon">
          <FaExclamationTriangle />
        </div>
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">¡Ups! Página No Encontrada</h2>
        <p className="not-found-text">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
          Pero no te preocupes, puedes volver al inicio y seguir explorando.
        </p>
        <Link to="/" className="not-found-button">
          Volver a la Página de Inicio
        </Link>
      </div>
    </div>
  );
}

export default NotFound;