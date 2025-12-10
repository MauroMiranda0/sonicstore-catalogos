// client/src/pages/Gallery/Gallery.jsx
import React, { useState } from 'react';

// 1. Importaciones para el Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import './Gallery.css';
import useCartStore from '../../stores/cartStore';
import { FaCheckCircle } from 'react-icons/fa';
import { products } from '../../data/mockData';
import logo from '../../assets/logo.svg';

function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = 12;
  const galleryItems = (products || []).map((item) => ({
    ...item,
    src: item.image,
    alt: item.name,
    title: item.name,
    sku: item.id,
    priceLabel: typeof item.price === 'number' ? `$${item.price.toFixed(2)} MXN` : 'Consultar precio',
    features: [
      item.brand ? `Linea ${item.brand}` : 'Coleccion destacada',
      item.rating ? `Calificacion: ${item.rating} / 5` : 'Nuevo en catalogo',
      item.catalogId ? `Catalogo #${item.catalogId}` : 'Catalogo digital',
    ].filter(Boolean),
  }));
  const totalPages = Math.max(1, Math.ceil(galleryItems.length / pageSize));
  const addProduct = useCartStore((state) => state.addProduct);

  const start = (page - 1) * pageSize;
  const paginatedItems = galleryItems.slice(start, start + pageSize);

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

  const handlePageChange = (nextPage) => {
    const safePage = Math.min(Math.max(nextPage, 1), totalPages);
    if (safePage === page) return;
    setPage(safePage);
    setOpen(false);
    setIndex(0);
    setFeedback('');
  };

  return (
    <div className="gallery-page">
      <header className="page-header-alt">
        <div className="container">
          <h1>Galeria de Productos</h1>
          <p className="page-subtitle">Inspirate con nuestra comunidad y descubre como combinar nuestros productos.</p>
        </div>
      </header>

      <section className="gallery-section">
        <div className="container">
          <div className="image-grid">
            {paginatedItems.map((item, i) => (
              <div
                className="grid-item"
                key={i}
                onClick={() => handleSelect(i)}
              >
                <div className="grid-image">
                  <img src={item.src} alt={item.alt} />
                  <div className="image-overlay">Ver</div>
                </div>
                <div className="grid-info">
                  <div>
                    <p className="grid-title">{item.title}</p>
                    {item.brand && <p className="grid-brand">{item.brand}</p>}
                  </div>
                  <div className="grid-meta">
                    <span className="grid-price">{item.priceLabel}</span>
                  </div>
                  <img src={logo} alt="SonicStore" className="grid-logo" />
                </div>
              </div>
            ))}
          </div>

          <div className="gallery-pagination">
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
        </div>
      </section>

      {/* Componente Lightbox */}
      <Lightbox
        open={open}
        close={() => {
          setOpen(false);
          setFeedback('');
        }}
        slides={paginatedItems}
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
                    {slide.sku && <p className="lightbox-sku">SKU: {slide.sku}</p>}
                    {slide.brand && <p className="lightbox-brand">{slide.brand}</p>}
                  </div>
                  <div className="lightbox-price-block">
                    {slide.priceLabel && <span className="lightbox-price">{slide.priceLabel}</span>}
                    {slide.url && (
                      <a
                        className="lightbox-link"
                        href={slide.url}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Ver producto
                      </a>
                    )}
                  </div>
                </div>

                {slide.description && (
                  <p className="lightbox-description">{slide.description}</p>
                )}

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
    </div>
  );
}

export default Gallery;
