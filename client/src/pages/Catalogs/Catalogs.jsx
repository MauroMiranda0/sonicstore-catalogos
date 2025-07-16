// client/src/pages/Catalogs/Catalogs.jsx
import React, { useState, useEffect } from 'react';
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
          <div key={catalog.id} className="catalog-card">
            <img src={catalog.image} alt={catalog.name} />
            <h3>{catalog.name}</h3>
            <p>{catalog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogs;