// client/src/components/FeaturedProducts.jsx
import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProducts.css';
import logo from '../assets/logo.png';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { FaCheckCircle } from 'react-icons/fa';
import useCartStore from '../stores/cartStore';
import { products as allProducts } from '../data/mockData';

function FeaturedProducts() {
  const PAGE_SIZE = 20;
  // Mostrar hasta 6 productos por marca para resaltar un mix balanceado
  const products = useMemo(() => {
    const grouped = allProducts.reduce((acc, product) => {
      const brand = product.brand || 'Sin marca';
      acc[brand] = acc[brand] || [];
      if (acc[brand].length < 6) acc[brand].push(product);
      return acc;
    }, {});

    return Object.values(grouped).flat();
  }, []);
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(products.length / PAGE_SIZE));

  // Corrige la pagina si cambia la cantidad total
  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  const paginatedProducts = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return products.slice(start, start + PAGE_SIZE);
  }, [page, products]);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState('');
  const addProduct = useCartStore((state) => state.addProduct);

  const formatPrice = (value) => (typeof value === 'number' ? `$${value.toFixed(2)} MXN` : 'Consultar precio');

  const slides = paginatedProducts?.map((product) => {
    const priceLabel = formatPrice(product.price);
    const featureList = [
      product.brand ? `Linea ${product.brand}` : 'Coleccion Natura',
      product.rating ? `Calificacion: ${product.rating} / 5` : 'Nuevo en catalogo',
      'Compra directa en natura.com.mx',
    ];

    return {
      ...product,
      src: product.image,
      alt: product.name,
      title: product.name,
      sku: product.id,
      priceLabel,
      features: featureList,
    };
  }) || [];

  const handleSelect = (i) => {
    setIndex(i);
    setOpen(true);
    setFeedback('');
  };

  const handleAddToCart = (slide) => {
    if (!slide) return;
    addProduct({
      name: slide.title || slide.alt,
      sku: slide.sku,
      price: slide.price,
      quantity: 1,
      image: slide.src,
    });
    setFeedback(`${slide.title || 'Producto'} agregado a la bolsa`);
  };

  const handlePageChange = (newPage) => {
    // ensure requested page is within valid bounds
    if (typeof newPage !== 'number') return;
    if (newPage < 1) return;
    if (newPage > totalPages) return;
    setPage(newPage);
  };

  return (
    <section className="featured-products-section">
      <div className="section-header">
        <h2>Productos Destacados</h2>
        <Link to="/catalogs" className="see-all-link">Ver Catalogos</Link>
      </div>

      <div className="products-grid">
        {paginatedProducts && paginatedProducts.map((product, i) => (
          <div className="grid-item" key={product.id || product.sku || product.title} onClick={() => handleSelect(i)}>
            <div className="grid-image">
              <img src={product.image} alt={product.name} />
              <div className="image-overlay">Ver</div>
            </div>
            <div className="grid-info">
              <div className="grid-text">
                <p className="grid-title">{product.name}</p>
                {product.brand && <p className="grid-brand">{product.brand}</p>}
              </div>
              <div className="grid-meta">
                <span className="grid-price">{formatPrice(product.price)}</span>
                <img src={logo} alt="SonicStore" className="grid-logo" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="products-pagination">
        <button
              type="button"
              className="page-btn"
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
            >
              &lt;
            </button>
            <span className="page-status">
              {page} de {totalPages}
            </span>
            <button
              type="button"
              className="page-btn"
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}
            >
              &gt;
            </button>
      </div>

      <Lightbox
        open={open}
        close={() => {
          setOpen(false);
          setFeedback('');
        }}
        slides={slides}
        index={index}
        on={{
          view: ({ index: nextIndex }) => {
            setIndex(nextIndex);
            setFeedback('');
          }
        }}
        render={{
          slide: ({ slide }) => (
            <div className="lightbox-frame">
              <img src={slide.src} alt={slide.alt} className="lightbox-image" />
              <div className="lightbox-overlay">
                <div className="lightbox-meta">
                  <div>
                    <h3>{slide.title}</h3>
                    {slide.brand && <p className="lightbox-brand">{slide.brand}</p>}
                    {slide.sku && <p className="lightbox-sku">SKU: {slide.sku}</p>}
                    {slide.rating && <p className="lightbox-rating">Calificacion: {slide.rating} / 5</p>}
                  </div>
                  <div className="lightbox-price-block">
                    <span className="lightbox-price">{slide.priceLabel}</span>
                    {slide.url && (
                      <a
                        className="lightbox-link"
                        href={slide.url}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Ver en Natura
                      </a>
                    )}
                  </div>
                </div>
                <ul className="lightbox-features">
                  {slide.features?.map((feature) => (
                    <li key={feature}>
                      <FaCheckCircle className="feature-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="lightbox-add-btn" onClick={() => handleAddToCart(slide)}>
                  Agregar a la bolsa
                </button>
                {feedback && <div className="lightbox-feedback">{feedback}</div>}
              </div>
            </div>
          )
        }}
      />
    </section>
  );
}

export default FeaturedProducts;
