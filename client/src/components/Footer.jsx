// client/src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';
import logo from '../assets/logo.png';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Columna 1: Logo y Descripción */}
          <div className="footer-column">
            <img src={logo} alt="SonicStore Logo" className="footer-logo" />
            <p className="footer-description">
              Tu tienda de confianza para encontrar lo último en moda, belleza y hogar. 
              Estilo y calidad en cada catálogo.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="footer-column">
            <h4>Navegación</h4>
            <ul>
              <li><Link to="/about">Sobre Nosotros</Link></li>
              <li><Link to="/contact">Contacto</Link></li>
              <li><Link to="/how-to-buy">Cómo Comprar</Link></li>
              <li><Link to="/products">Todos los Productos</Link></li>
            </ul>
          </div>

          {/* Columna 3: Catálogos */}
          <div className="footer-column">
            <h4>Catálogos</h4>
            <ul>
              <li><Link to="/catalogs">Ropa</Link></li>
              <li><Link to="/catalogs">Maquillaje</Link></li>
              <li><Link to="/catalogs">Zapatos</Link></li>
              <li><Link to="/catalogs">Hogar</Link></li>
            </ul>
          </div>

          {/* Columna 4: Redes Sociales */}
          <div className="footer-column">
            <h4>Síguenos</h4>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest"><FaPinterest /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} SonicStore. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;