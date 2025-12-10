// client/src/pages/Home/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import FeaturedProducts from '../../components/FeaturedProducts';
import CatalogSlider from '../../components/CatalogSlider';
import BrandSlider from '../../components/BrandSlider';
import Testimonials from '../../components/Testimonials';
import FinalCTA from '../../components/FinalCTA';
import './Home.css';

// Hero media
import heroImage1 from '../../assets/hero-product-1.mp4';

const heroSlides = [
  {
    id: 1,
    subtitle: 'La belleza en cada detalle',
    title: 'Colecciones que inspiran',
    media: heroImage1,
    type: 'video',
    link: '/catalogs',
  },
];

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section-fullwidth">
        <Swiper
          modules={[Navigation, Pagination, EffectFade, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="hero-swiper-fullwidth"
        >
          {heroSlides.map((slide) => (
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
              <div className="hero-slide-overlay"></div>
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
