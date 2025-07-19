// client/src/components/CatalogSlider.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

// Importaciones de Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import './CatalogSlider.css';

function CatalogSlider() {
  const { data: catalogs, loading, error } = useFetch('/api/catalogs');

  if (loading) return <div className="loading-message">Cargando catálogos...</div>;
  if (error) return <div className="error-message">Error: {error.message}</div>;

  return (
    <section className="catalog-slider-section">
      <div className="section-header">
        <h2>Explora Nuestros Catálogos</h2>
        <Link to="/catalogs" className="see-all-link">Ver Todos</Link>
      </div>
      
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1} // Vista por defecto para móviles
        pagination={{ clickable: true }}
        // ¡La magia del diseño responsivo!
        breakpoints={{
          // Cuando el ancho de la ventana es >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // Cuando el ancho de la ventana es >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="catalog-swiper"
      >
        {catalogs && catalogs.map(catalog => (
          <SwiperSlide key={catalog.id}>
            <Link to={`/catalogs/${catalog.id}`} className="slider-card-link">
              <div className="slider-catalog-card">
                <div className="slider-card-image-container">
                  <img src={catalog.image} alt={catalog.name} />
                </div>
                <div className="slider-card-content">
                  <h3>{catalog.name}</h3>
                  <p>{catalog.description}</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default CatalogSlider;