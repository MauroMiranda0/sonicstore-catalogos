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
import FeaturedProducts from '../../components/FeaturedProducts'; // Importa la nueva sección
import CatalogSlider from '../../components/CatalogSlider'; // 1. Importa el nuevo componente
import BrandSlider from '../../components/BrandSlider'; // 1. Importa el nuevo componente
import Testimonials from '../../components/Testimonials'; // Importa la nueva sección de testimonios
import FinalCTA from '../../components/FinalCTA';
// Importa el CSS de la página  

import './Home.css';

// Importa tus imágenes / videos
import heroVideo1 from '../../assets/hero-product-1.mp4';
/* import heroImage0 from '../../assets/hero-product-0.jpg';
import heroImage2 from '../../assets/hero-product-2.jpg';
import heroImage3 from '../../assets/hero-product-3.jpg'; */

// Los datos de los slides siguen siendo los mismos
const heroSlides = [
  {
    id: 1,
    subtitle: 'La belleza en cada detalle',
    title: 'Colecciones que inspiran',
    media: heroVideo1,
    type: 'video',
    link: '/catalogs',
  },
/*   { id: 0, subtitle: 'La belleza en cada detalle', title: 'Colecciones que inspiran', media: heroImage0, type: 'image', link: '/catalogs' },
  { id: 2, subtitle: 'Nuevas llegadas', title: 'Estilo para tu Hogar', media: heroImage2, type: 'image', link: '/catalogs' },
  { id: 3, subtitle: 'Temporada de color', title: 'Maquillaje vibrante', media: heroImage3, type: 'image', link: '/catalogs' }, */
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
            <SwiperSlide key={slide.id}>
              {slide.type === 'video' ? (
                <video
                  className="hero-media"
                  src={slide.media}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <div
                  className="hero-media hero-media-image"
                  style={{ backgroundImage: `url(${slide.media})` }}
                />
              )}
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
      {/* AÑADE LAS NUEVAS SECCIONES AQUÍ */}
      <div className="container">
        <FeaturedProducts />
      </div>
      <CatalogSlider />
       <div className="container">
      <BrandSlider />
       </div>
      <Testimonials />
      <FinalCTA />
    </div>
  );
}

export default Home;
// client/src/pages/Home/Home.jsx
// Aquí hemos simplificado la estructura del slide y añadido una capa de superposición para oscurecer la imagen de fondo.
// También hemos añadido un botón de llamada a la acción (CTA) que redirige a la página de catálogos.
