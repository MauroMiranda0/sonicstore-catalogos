// client/src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Catalogs from './pages/Catalogs/Catalogs.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Gallery from './pages/Gallery/Gallery.jsx';
import AddProduct from './pages/AddProduct/AddProduct.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
// Importa las demás páginas que creaste...
import Account from './pages/Account/Account.jsx';
import CatalogDetail from './pages/CatalogDetail/CatalogDetail.jsx'; // 1. Importa el nuevo componente que crearemos  para mostrar los detalles del catálogo
import ProductDetail from './pages/ProductDetail/ProductDetail.jsx'; 
import HowToBuy from './pages/HowToBuy/HowToBuy.jsx';

import './index.css';

// Creamos el enrutador
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />, // Página para mostrar en caso de error o ruta no encontrada
    children: [
      {
        index: true, // Esto hace que sea la ruta por defecto para '/'
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      // 2. AÑADE LA NUEVA RUTA DINÁMICA
      {
        path: 'products/:id',
        element: <ProductDetail />,
      },
      {
        path: 'catalogs',
        element: <Catalogs />,
      },
      // 2. AÑADE LA NUEVA RUTA DINÁMICA
      {
        path: 'catalogs/:id', // La ruta con el parámetro
        element: <CatalogDetail />,
      },
      // 3. AÑADE LAS OTRAS RUTAS
      // Estas rutas son para las otras páginas que creaste
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'how-to-buy',
        element: <HowToBuy />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
      },
      {
        path: 'add-product',
        element: <AddProduct />,
      },
      {
        path: 'account',
        element: <Account />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
