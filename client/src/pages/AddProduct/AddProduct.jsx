// client/src/pages/AddProduct/AddProduct.jsx
import React, { useState } from 'react';
import AddProductForm from '../../components/AddProductForm';
import './AddProduct.css';

function AddProduct() {
  const [feedback, setFeedback] = useState('');

  const handleAdded = () => {
    setFeedback('Producto agregado a tu pedido.');
    setTimeout(() => setFeedback(''), 2000);
  };

  return (
    <div className="add-product-page">
      <div className="add-product-card">
        <h1>Agregar producto</h1>
        <p className="add-product-subtitle">Captura el código o nombre del artículo y la cantidad que necesitas.</p>
        <AddProductForm onProductAdded={handleAdded} />
        {feedback && <div className="add-product-feedback">{feedback}</div>}
      </div>
    </div>
  );
}

export default AddProduct;
