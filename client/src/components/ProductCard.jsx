// client/src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

// Usaremos un placeholder para el logo/marca por ahora
import brandIcon from '../assets/logo.png'; 

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`} className="product-image-link">
        <div className="product-image-container">
          <img src={product.image} alt={product.name} />
        </div>
      </Link>
      <div className="product-info">
        <div className="product-details">
          <img src={brandIcon} alt="brand" className="brand-icon" />
          <span className="product-name">{product.name}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;