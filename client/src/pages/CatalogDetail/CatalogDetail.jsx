// client/src/pages/CatalogDetail/CatalogDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './CatalogDetail.css';

function CatalogDetail() {
  const { id } = useParams(); // Obtiene el parámetro 'id' de la URL
  const [catalog, setCatalog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/catalogs/${id}`) // Petición a la API con el ID específico
      .then(response => {
        if (!response.ok) {
          throw new Error('Catálogo no encontrado');
        }
        return response.json();
      })
      .then(data => {
        setCatalog(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]); // El efecto se re-ejecuta si el 'id' cambia

  if (loading) return <div>Cargando detalles del catálogo...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!catalog) return null; // No mostrar nada si el catálogo es nulo

  return (
    <div className="catalog-detail-page">
      <Link to="/catalogs" className="back-link">← Volver a Catálogos</Link>
      <div className="detail-content">
        <img src={catalog.image} alt={catalog.name} />
        <div className="detail-info">
          <h1>{catalog.name}</h1>
          <p>{catalog.description}</p>
          {/* Aquí podríamos añadir más detalles en el futuro, como una lista de productos */}
        </div>
      </div>
    </div>
  );
}

export default CatalogDetail;