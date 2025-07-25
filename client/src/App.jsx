// client/src/App.jsx
import React, { useState } from 'react'; // 1. Importa useState
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';
import OrderPanel from './components/OrderPanel'; // 2. Importa el panel

import './App.css';

function App() {
  // 3. Estado para controlar la visibilidad del panel
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <div>
      {/* 4. Pasa la función para abrir el panel al Header */}
      <Header onCartClick={() => setIsPanelOpen(true)} />
      
      <main className="container">
        <Outlet />
      </main>
      
      <Footer />
      <FloatingButton />
      
      {/* 5. Renderiza el panel y le pasa el estado y la función para cerrarlo */}
      <OrderPanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)} />
    </div>
  );
}

export default App;