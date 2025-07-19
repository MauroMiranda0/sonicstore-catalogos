// client/src/components/FeaturedProducts.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import ProductCard from './ProductCard';
import './FeaturedProducts.css';

function FeaturedProducts() {
  const { data: products, loading, error } = useFetch('/api/products?featured=true');

  return (
    <section className="featured-products-section">
      <div className="section-header">
        <h2>Nuevos Productos</h2>
        <Link to="/catalogs" className="see-all-link">Ver Catalogos</Link>
      </div>
      
      {loading && <div>Loading products...</div>}
      {error && <div>Error: {error.message}</div>}
      
      <div className="products-grid">
        {products && products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;