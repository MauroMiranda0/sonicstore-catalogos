// client/src/components/Header.jsx

import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.svg';

import { FaWhatsapp, FaUserCircle, FaShoppingBag, FaSearch, FaQuestionCircle } from 'react-icons/fa';
import useCartStore from '../stores/cartStore';

function Header({ onCartClick, onHowToBuyClick }) {
  const items = useCartStore((state) => state.items);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-top">
        <div className="container">
          <Link to="/" className="header-logo">
            <img src={logo} alt="SonicStore Logo" />
          </Link>

          <div className="header-search">
            <input type="text" placeholder="Buscar productos..." />
            <button><FaSearch /></button>
          </div>

          <div className="header-icons">
            <a
              href="https://wa.me/7712650312"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            {/* <Link to="/account" aria-label="Mi Cuenta"><FaUserCircle /></Link> */}

            <button className="cart-icon-btn" aria-label="Mi Pedido" onClick={onCartClick} type="button">
              <FaShoppingBag />
              {items.length > 0 && <span className="cart-count">{items.length}</span>}
            </button>
            <button type="button" className="icon-link" onClick={onHowToBuyClick} aria-label="¿Cómo comprar?">
              <FaQuestionCircle />
            </button>

            <button
              className="menu-toggle"
              aria-label="Abrir menu de navegacion"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-expanded={isMenuOpen}
              type="button"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      <div className={`header-main ${isMenuOpen ? 'open' : ''}`}>
        <div className="container">
          <nav className="main-nav">
            <ul>
              <li><NavLink to="/" onClick={closeMenu}>Inicio</NavLink></li>
              <li><NavLink to="/about" onClick={closeMenu}>Nosotros</NavLink></li>
              <li><NavLink to="/catalogs" onClick={closeMenu}>Catalogos</NavLink></li>
              <li><NavLink to="/gallery" onClick={closeMenu}>Galeria</NavLink></li>
              <li><NavLink to="/contact" onClick={closeMenu}>Contacto</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
