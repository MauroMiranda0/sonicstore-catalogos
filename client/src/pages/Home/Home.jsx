// client/src/pages/Home/Home.jsx
import React from 'react';
import useFetch from '../../hooks/useFetch';
import HeroCarousel from '../../components/HeroCarousel';
// import './Home.css'; // Podemos crear este archivo si necesitamos más estilos

function Home() {
  const { data: slides, loading, error } = useFetch('/api/hero-slides');

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error al cargar la página.</div>;

  return (
    <div className="home-page">
      {/* El Hero Carousel es lo primero que se ve */}
      <HeroCarousel slides={slides} />

      {/* Aquí podemos añadir más secciones en el futuro */}
      <div className="container more-sections">
        <h2>Otras Secciones Próximamente...</h2>
      </div>
    </div>
  );
}

export default Home;