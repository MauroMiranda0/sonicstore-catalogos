// client/src/pages/ProductDetail/ProductDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import './ProductDetail.css';

function ProductDetail() {
    const { id } = useParams(); // Obtiene el 'id' de la URL
    const { data: product, loading, error } = useFetch(`/api/products/${id}`);

    if (loading) return <div className="loading-message">Cargando producto...</div>;
    if (error) return <div className="error-message">Error: Producto no encontrado.</div>;
    if (!product) return null; // No renderizar nada si el producto no ha cargado

    return (
        <div className="product-detail-page">
            <div className="breadcrumb">
                <Link to="/">Inicio</Link> / <Link to="/products">Productos</Link> / <span>{product.name}</span>
            </div>
            <div className="product-layout">
                <div className="product-gallery">
                    <img src={product.image} alt={product.name} className="main-product-image" />
                    {/* Aquí podría ir una galería de imágenes más pequeñas en el futuro */}
                </div>
                <div className="product-info-details">
                    <h1 className="product-title-detail">{product.name}</h1>
                    <p className="product-price-detail">${product.price.toFixed(2)}</p>
                    <p className="product-description-detail">
                        Aquí iría una descripción más detallada del producto. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <div className="product-actions">
                        {/* Aquí irían los selectores de talla/color y la cantidad */}
                        <button className="add-to-cart-btn">Añadir al Pedido</button>
                        <button className="add-to-cart-btn catalog-btn">Ver Catálogo</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;