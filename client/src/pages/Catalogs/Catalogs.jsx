// client/src/pages/Catalogs/Catalogs.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // 1. IMPORTAR LINK
import './Catalogs.css'; // Crearemos este archivo para los estilos

function Catalogs() {
  const [catalogs, setCatalogs] = useState([]); // Estado para guardar el array de catálogos
  const [loading, setLoading] = useState(true); // Estado para saber si estamos cargando
  const [error, setError] = useState(null);     // Estado para manejar errores

  useEffect(() => {
    fetch('/api/catalogs') // Usamos el proxy, ¡qué fácil!
      .then(response => {
        if (!response.ok) {
          throw new Error('La respuesta de la red no fue correcta');
        }
        return response.json();
      })
      .then(data => {
        setCatalogs(data); // Guardamos los datos en el estado
        setLoading(false); // Dejamos de cargar
      })
      .catch(error => {
        setError(error.message); // Guardamos el mensaje de error
        setLoading(false); // Dejamos de cargar
      });
  }, []);

  // Renderizado condicional
  if (loading) return <div>Cargando catálogos...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="catalogs-page">
      <h2>Nuestros Catálogos</h2>
      <div className="catalogs-grid">
        {catalogs.map(catalog => (
          // El Link sigue envolviendo todo para que la tarjeta sea clickeable
          <Link to={`/catalogs/${catalog.id}`} key={catalog.id} className="catalog-link">
            
            {/* NUEVA ESTRUCTURA INTERNA DE LA TARJETA */}
            <div className="catalog-card">
              <div className="card-image-container">
                <img src={catalog.image} alt={catalog.name} />
              </div>
              <div className="card-content">
                <h3>{catalog.name}</h3>
                <p>{catalog.description}</p>
                {/* Este div simulará ser nuestro botón */}
                <div className="card-button">
                  Ver Productos
                </div>
              </div>
            </div>
            
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Catalogs;