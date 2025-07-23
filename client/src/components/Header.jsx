// client/src/components/Header.jsx

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'; // Importamos el nuevo archivo CSS
import logo from '../assets/logo.png'; // Importamos nuestro logo

// Importamos los iconos que vamos a usar desde react-icons
// 1. Importa los nuevos iconos y el store
import { FaWhatsapp, FaUserCircle, FaShoppingBag, FaSearch } from 'react-icons/fa';
import useCartStore from '../stores/cartStore';

function Header() {
  // 2. Accede al estado del store
  // Usamos un 'selector' para que el componente solo se vuelva a renderizar si 'items' cambia.
  const items = useCartStore((state) => state.items);

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

          {/* Vamos a modificar el div 'header-icons' */}

          <div className="header-icons">
            <a href="https://wa.me/TUNUMERODEWHATSAPP" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
            <Link to="/account" aria-label="Mi Cuenta"><FaUserCircle /></Link>
            
            {/* 3. Icono del Carrito/Pedido con contador */}
            <button className="cart-icon-btn" aria-label="Mi Pedido">
              <FaShoppingBag />
              {items.length > 0 && (
                <span className="cart-count">{items.length}</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ===== HEADER PRINCIPAL (Navegación) ===== */}
      <div className="header-main">
        <div className="container">
          <nav className="main-nav">
            <ul>
              <li><NavLink to="/">Inicio</NavLink></li>
              <li><NavLink to="/about">Nosotros</NavLink></li>
              <li><NavLink to="/catalogs">Catálogos</NavLink></li>
              <li><NavLink to="/gallery">Galería</NavLink></li>
              <li><NavLink to="/contact">Contacto</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;