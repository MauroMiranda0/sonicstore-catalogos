// client/src/pages/CatalogDetail/CatalogDetail.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Modal from '../../components/Modal';
import AddProductForm from '../../components/AddProductForm';
import './CatalogDetail.css';

function CatalogDetail() {
  const { id } = useParams();
  const { data: catalog, loading, error } = useFetch(`/api/catalogs/${id}`);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewCatalog = () => {
    const url = catalog?.catalogUrl || catalog?.url || catalog?.link || catalog?.image;
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (loading) return <div>Cargando detalles de la marca...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!catalog) return null;

  return (
    <>
      <div className="catalog-detail-page">
        <div className="back-link">
          <Link to="/catalogs">{'<'} Volver a Nuestras Marcas</Link>
        </div>

        <div className="detail-card">
          <div className="detail-media">
            <img src={catalog.image} alt={catalog.name} />
          </div>

          <div className="detail-info">
            <h1 className="catalog-title">{catalog.name}</h1>
            <p className="catalog-description">
              {catalog.description ||
                'Belleza sustentable con activos de la biodiversidad. Descubre sus lineas iconicas y beneficios destacados.'}
            </p>

            <div className="catalog-about">
              <h3>Descripcion completa</h3>
              <p>
                {catalog.longDescription ||
                  'Disfruta la linea completa: texturas sensoriales, formulas responsables y sets listos para regalar. Explora lanzamientos, promociones y colecciones recomendadas.'}
              </p>
            </div>

            {catalog.brandStory && (
              <div className="catalog-about">
                <h3>Resena de la marca</h3>
                <p>{catalog.brandStory}</p>
              </div>
            )}

            <div className="catalog-actions">
              <button className="view-catalog-btn" onClick={handleViewCatalog}>Ver Catalogo Completo</button>
              <button className="add-to-order-btn" onClick={() => setIsModalOpen(true)}>
                Anadir producto de este catalogo
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Anadir de ${catalog.name}`}
      >
        <AddProductForm onProductAdded={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
}

export default CatalogDetail;
