// client/src/components/Navbar.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'; // Crearemos este archivo a continuación

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        SonicStore
      </Link>
      <ul className="navbar-links">
        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/catalogs">Catálogos</NavLink></li>
        <li><NavLink to="/gallery">Galería</NavLink></li>
        <li><NavLink to="/about">Nosotros</NavLink></li>
        <li><NavLink to="/contact">Contacto</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;