// client/src/pages/Home/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// 1. Aseguramos que TODOS los CSS de Swiper necesarios estén importados
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; // ¡Esta línea es crucial para el efecto fade!

import './Home.css';

// Importa tus imágenes
import heroImage0 from '../../assets/hero-product-0.jpg';
import heroImage1 from '../../assets/hero-product-1.jpg';
import heroImage2 from '../../assets/hero-product-2.jpg';
import heroImage3 from '../../assets/hero-product-3.jpg';

// Los datos de los slides siguen siendo los mismos
const heroSlides = [
    { id: 0, subtitle: 'La belleza en cada detalle', title: 'Colecciones que inspiran', image: heroImage0, link: '/catalogs' },
    { id: 1, subtitle: 'La belleza en cada detalle', title: 'Colecciones que inspiran', image: heroImage1, link: '/catalogs' },
    { id: 2, subtitle: 'Nuevas llegadas', title: 'Estilo para tu Hogar', image: heroImage2, link: '/catalogs' },
    { id: 3, subtitle: 'Temporada de color', title: 'Maquillaje vibrante', image: heroImage3, link: '/catalogs' },
];

function Home() {
  return (
    <div className="home-page">
      {/* La sección hero ahora solo contiene el Swiper */}
      <section className="hero-section-fullwidth">
        <Swiper
          modules={[Navigation, Pagination, EffectFade, Autoplay]}
          spaceBetween={0} // Sin espacio entre slides
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="hero-swiper-fullwidth"
        >
          {heroSlides.map((slide) => (
            // 2. La estructura del slide es más simple ahora
            <SwiperSlide key={slide.id} style={{ backgroundImage: `url(${slide.image})` }}>
              <div className="hero-slide-overlay"></div> {/* Capa para oscurecer la imagen */}
              <div className="hero-slide-content-centered">
                <p className="hero-subtitle">{slide.subtitle}</p>
                <h1 className="hero-title">{slide.title}</h1>
                <Link to={slide.link} className="hero-cta-button">
                  Explorar
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}

export default Home;