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
import HowToBuy from './pages/HowToBuy/HowToBuy.jsx';
import Testimonials from './pages/Testimonials/Testimonials.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
// Importa las demás páginas que creaste...
import Account from './pages/Account/Account.jsx';


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
      {
        path: 'catalogs',
        element: <Catalogs />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
      },
      {
        path: 'how-to-buy',
        element: <HowToBuy />,
      },
      {
        path: 'testimonials',
        element: <Testimonials />,
      },
      {
        path: 'account',
        element: <Account />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);