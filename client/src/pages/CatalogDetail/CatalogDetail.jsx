// client/src/pages/CatalogDetail/CatalogDetail.jsx
import React, { useState } from 'react'; // 1. Importa useState
import { useParams, Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Modal from '../../components/Modal'; // 2. Importa Modal
import AddProductForm from '../../components/AddProductForm'; // 3. Importa el formulario
import './CatalogDetail.css';

function CatalogDetail() {
  const { id } = useParams();
  const { data: catalog, loading, error } = useFetch(`/api/catalogs/${id}`);
  
  // 4. Estado para el modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewCatalog = () => {
    const url = catalog.catalogUrl || catalog.url || catalog.link || catalog.image;
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // ... (lógica de loading/error)

  if (loading) return <div>Cargando detalles de la marca...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!catalog) return null; // No mostrar nada si el catálogo es nulo

  return (
    <>
      <div className="catalog-detail-page">
        <div className="back-link">
          <Link to="/catalogs">{'<'} Volver a Nuestras Marcas</Link>
        </div>
        {/* ... (contenido existente de la página) ... */}
        <div className="detail-content">
          <img src={catalog.image} alt={catalog.name} />
          <div className="detail-info">
            <h1>{catalog.name}</h1>
            <p className="catalog-description">{catalog.description}</p>
            <div className="catalog-about">
              <h3>Descripción completa</h3>
              <p>
                {catalog.longDescription ||
                  'Descubre toda la línea de productos y las novedades destacadas de esta marca. Consulta tallas, colores, acabados y todas las variantes disponibles en el catálogo oficial.'}
              </p>
              <h3>Reseña de la marca</h3>
              <p>
                {catalog.brandStory ||
                  'Marca reconocida por su calidad y tendencia. Combina innovación, estilo y precios competitivos para ofrecerte colecciones frescas temporada tras temporada.'}
              </p>
            </div>
            <div className="catalog-actions">
              <button className="view-catalog-btn" onClick={handleViewCatalog}>Ver Catálogo Completo</button>
              {/* 5. Botón para añadir producto manualmente */}
              <button className="add-to-order-btn" onClick={() => setIsModalOpen(true)}>
                Añadir Producto de este Catálogo
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* 6. Renderiza el Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title={`Añadir de ${catalog.name}`}
      >
        <AddProductForm onProductAdded={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
}

export default CatalogDetail;
