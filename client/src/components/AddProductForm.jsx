// client/src/components/AddProductForm.jsx
import React, { useState } from 'react';
import useCartStore from '../stores/cartStore';
import './AddProductForm.css';

function AddProductForm({ onProductAdded }) {
  const addProduct = useCartStore((state) => state.addProduct);

  const [productCode, setProductCode] = useState('');
  const [productName, setProductName] = useState('');
  const [variant, setVariant] = useState('');
  const [brand, setBrand] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productCode.trim()) {
      alert('El código del producto es obligatorio.');
      return;
    }
    if (!brand.trim()) {
      alert('La marca es obligatoria.');
      return;
    }

    const newProduct = {
      sku: productCode.trim(),
      name: productName.trim() || productCode.trim(),
      brand: brand.trim(),
      catalog: brand.trim(),
      variant: variant.trim(),
      quantity: parseInt(quantity, 10) || 1,
    };
    addProduct(newProduct);

    setProductCode('');
    setProductName('');
    setBrand('');
    setVariant('');
    setQuantity(1);
    onProductAdded();
  };

  return (
    <form onSubmit={handleSubmit} className="add-product-form">
      <p className="form-instructions">
        Captura los datos tal como aparecen en el catálogo para armar tu pedido.
      </p>
      <div className="form-group">
        <label htmlFor="productCode">Código del producto *</label>
        <input
          type="text"
          id="productCode"
          value={productCode}
          onChange={(e) => setProductCode(e.target.value)}
          placeholder="Ej: 12345"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="productName">Nombre del producto (opcional)</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Ej: Vestido Floral Azul"
        />
      </div>
      <div className="form-group">
        <label htmlFor="brand">Marca *</label>
        <input
          type="text"
          id="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          placeholder="Ej: Natura, Avón, etc."
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="variant">Talla / color / variante</label>
        <input
          type="text"
          id="variant"
          value={variant}
          onChange={(e) => setVariant(e.target.value)}
          placeholder="Ej: Talla M, Color rojo"
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
