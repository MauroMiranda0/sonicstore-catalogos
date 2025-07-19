// client/src/pages/Catalogs/Catalogs.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // 1. IMPORTAR LINK
import useFetch from '../../hooks/useFetch'; // 1. Importa nuestro custom hook
import './Catalogs.css'; // Crearemos este archivo para los estilos

function Catalogs() {
  // 2. ¡Toda la lógica de fetch ahora está en esta sola línea!
  const { data: catalogs, loading, error } = useFetch('/api/catalogs');

  // Eliminado useEffect redundante: useFetch ya maneja la lógica de fetch y estado.

  // Renderizado condicional
  if (loading) return <div>Cargando catálogos...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="catalogs-page">
      <h2>Nuestros Catálogos</h2>
      <div className="catalogs-grid">
        {/* Usamos 'catalogs &&' como guarda por si data es null inicialmente */}
        {catalogs && catalogs.map(catalog => (
          <Link to={`/catalogs/${catalog.id}`} key={catalog.id} className="catalog-link">
            <div className="catalog-card">
              <div className="card-image-container">
                <img src={catalog.image} alt={catalog.name} />
              </div>
              <div className="card-content">
                <h3>{catalog.name}</h3>
                <p>{catalog.description}</p>
                <div className="card-button">
                  Ver Catalogo
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