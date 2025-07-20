// client/src/components/CatalogSlider.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

// Importaciones de Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules'; // <-- AÑADE NAVIGATION AQUÍ
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation'; // <-- AÑADE EL CSS PARA LAS FLECHAS

import './CatalogSlider.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importamos iconos para las flechas

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
        // 2. Añade 'Navigation' a los módulos
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        // 4. Conectamos nuestros botones personalizados
        navigation={{
          nextEl: '.custom-next-btn',
          prevEl: '.custom-prev-btn',
        }}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
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
      <div className="slider-nav-buttons">
        {/* 3. Creamos nuestros propios botones fuera del Swiper */}
        <button className="custom-prev-btn"><FaArrowLeft /></button>
        <button className="custom-next-btn"><FaArrowRight /></button>
      </div>
    </section>
  );
}

export default CatalogSlider;