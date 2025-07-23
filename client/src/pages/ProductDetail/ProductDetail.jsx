// client/src/pages/ProductDetail/ProductDetail.jsx
import React, { useState } from 'react'; // 1. Importa useState
import { useParams, Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Modal from '../../components/Modal'; // 2. Importa el Modal
import AddProductForm from '../../components/AddProductForm'; // 3. Importa el nuevo formulario
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const { data: product, loading, error } = useFetch(`/api/products/${id}`);
  
  // 4. Estado para controlar el modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (loading) return <div className="loading-message">Cargando producto...</div>;
  if (error) return <div className="error-message">Error: Producto no encontrado.</div>;
  if (!product) return null;

  return (
    <> {/* Usa un Fragment para poder renderizar el modal fuera del div principal */}
      <div className="product-detail-page">
        {/* ... (breadcrumb y product-layout existentes) ... */}
        <div className="product-layout">
          <div className="product-gallery">
            <img src={product.image} alt={product.name} className="main-product-image" />
          </div>
          <div className="product-info-details">
            <h1 className="product-title-detail">{product.name}</h1>
            <p className="product-price-detail">${product.price.toFixed(2)}</p>
            <p className="product-description-detail">
              Aquí iría una descripción más detallada del producto...
            </p>
            
            <div className="product-actions">
              {/* 5. Este botón ahora abre el modal */}
              <button className="add-to-cart-btn" onClick={() => setIsModalOpen(true)}>
                Añadir a mi Pedido
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Renderiza el Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Añadir Producto al Pedido"
      >
        <AddProductForm onProductAdded={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
}

export default ProductDetail;