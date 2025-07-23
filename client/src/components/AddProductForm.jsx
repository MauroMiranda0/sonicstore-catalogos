// client/src/components/AddProductForm.jsx
import React, { useState } from 'react';
import useCartStore from '../stores/cartStore';
import './AddProductForm.css';

function AddProductForm({ onProductAdded }) {
  // 1. Llama a la acción 'addProduct' desde nuestro store
  const addProduct = useCartStore((state) => state.addProduct);

  // 2. Estado local para los campos del formulario
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productName.trim()) {
      alert('Por favor, ingresa el nombre o código del producto.');
      return;
    }

    // 3. Crea el objeto del producto y lo añade al store
    const newProduct = {
      name: productName,
      quantity: parseInt(quantity, 10),
    };
    addProduct(newProduct);
    
    // 4. Limpia el formulario y cierra el modal (a través de la prop)
    setProductName('');
    setQuantity(1);
    onProductAdded(); // Llama a la función del padre para cerrar el modal
  };

  return (
    <form onSubmit={handleSubmit} className="add-product-form">
      <p className="form-instructions">
        Escribe el código o nombre del producto que viste en el catálogo y la cantidad que deseas.
      </p>
      <div className="form-group">
        <label htmlFor="productName">Nombre o Código del Producto</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Ej: Vestido Floral Azul, Cód: 12345"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="quantity">Cantidad</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="1"
          required
        />
      </div>
      <button type="submit" className="submit-btn-form">
        Añadir a mi Pedido
      </button>
    </form>
  );
}

export default AddProductForm;