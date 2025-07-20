// client/src/components/Header.jsx

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'; // Importamos el nuevo archivo CSS
import logo from '../assets/logo.png'; // Importamos nuestro logo

// Importamos los iconos que vamos a usar desde react-icons
import { FaUserCircle, FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';

function Header() {
  return (
    <header className="site-header">
      {/* ===== HEADER SUPERIOR ===== */}
      <div className="header-top">
        <div className="container">
          <Link to="/" className="header-logo">
            <img src={logo} alt="SonicStore Logo" />
          </Link>
          
          {/* Placeholder para la barra de búsqueda (inspirado en la imagen) */}
          <div className="header-search">
             <input type="text" placeholder="Buscar productos..." />
             <button><FaSearch /></button>
          </div>

          <div className="header-icons">
            <Link to="/account" aria-label="Mi Cuenta"><FaUserCircle /></Link>
            <Link to="/wishlist" aria-label="Lista de Deseos"><FaHeart /></Link>
            <Link to="/cart" aria-label="Carrito de Compras"><FaShoppingCart /></Link>
          </div>
        </div>
      </div>

      {/* ===== HEADER PRINCIPAL (Navegación) ===== */}
      <div className="header-main">
        <div className="container">
          <nav className="main-nav">
            <ul>
              <li><NavLink to="/">Inicio</NavLink></li>
              <li><NavLink to="/catalogs">Catálogos</NavLink></li>
              <li><NavLink to="/gallery">Galería</NavLink></li>
              <li><NavLink to="/how-to-buy">Cómo Comprar</NavLink></li>
              <li><NavLink to="/contact">Contacto</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;