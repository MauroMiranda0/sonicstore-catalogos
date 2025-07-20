// client/src/pages/About/About.jsx
import React from 'react';
import './About.css';
import aboutImage from '../../assets/about-us.jpg';
import BenefitsSection from '../../components/BenefitsSection'; // Importa la nueva sección de beneficios 

function About() {
  return (
    <div className="about-page">
      {/* Sección 1: Cabecera de la página */}
      <header className="about-header">
        <div className="container">
          <h1>Sobre SonicStore</h1>
          <p className="page-subtitle">Nuestra pasión es llevarte estilo y calidad a través de nuestros catálogos.</p>
        </div>
      </header>

      {/* Sección 2: Nuestra Historia (Layout dividido) */}
      <section className="about-story-section">
        <div className="container about-grid">
          <div className="story-image">
            <img src={aboutImage} alt="El equipo de SonicStore" />
          </div>
          <div className="story-content">
            <h2>Nuestra Historia</h2>
            <p>
              SonicStore nació de un sueño: hacer que la moda, la belleza y el estilo para el hogar 
              sean accesibles para todos, sin comprometer la calidad. Comenzamos en un pequeño taller, 
              seleccionando cuidadosamente cada producto y cada marca con la que trabajamos.
            </p>
            <p>
              Creemos que cada artículo que eliges es una extensión de tu personalidad. Por eso, nos 
              dedicamos a curar colecciones que no solo siguen las últimas tendencias, sino que también 
              ofrecen piezas atemporales que te acompañarán durante años.
            </p>
          </div>
        </div>
      </section>

      {/* Sección 3: Misión y Visión (Tarjetas) */}
      <section className="about-mission-section">
        <div className="container">
          <div className="mission-cards">
            <div className="mission-card">
              <h3>Nuestra Misión</h3>
              <p>Ofrecer una experiencia de compra por catálogo excepcional, con productos de alta calidad, un servicio al cliente inigualable y la comodidad de comprar desde cualquier lugar.</p>
            </div>
            <div className="mission-card">
              <h3>Nuestra Visión</h3>
              <p>Ser la plataforma de venta por catálogo líder en el mercado, reconocida por nuestra innovación, nuestro compromiso con la calidad y por inspirar a nuestros clientes a vivir con estilo.</p>
            </div>
          </div>
        </div>
      </section>
      <BenefitsSection/>
    </div>
  );
}

export default About;