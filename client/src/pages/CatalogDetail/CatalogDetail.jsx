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

  // ... (lógica de loading/error)

  if (loading) return <div>Cargando detalles del catálogo...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!catalog) return null; // No mostrar nada si el catálogo es nulo

  return (
    <>
      <div className="catalog-detail-page">
        {/* ... (contenido existente de la página) ... */}
        <div className="detail-content">
          <img src={catalog.image} alt={catalog.name} />
          <div className="detail-info">
            <h1>{catalog.name}</h1>
            <p>{catalog.description}</p>
            <div className="catalog-actions">
              <button className="view-catalog-btn">Ver Catálogo Completo</button>
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