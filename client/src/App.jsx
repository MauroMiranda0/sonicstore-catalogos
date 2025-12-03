// client/src/App.jsx
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';
import OrderPanel from './components/OrderPanel';
import Modal from './components/Modal';
import HowToBuyContent from './components/HowToBuyContent';

import './App.css';

function App() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isHowToBuyOpen, setIsHowToBuyOpen] = useState(false);

  return (
    <div>
      <Header
        onCartClick={() => setIsPanelOpen(true)}
        onHowToBuyClick={() => setIsHowToBuyOpen(true)}
      />

      <main className="container">
        <Outlet />
      </main>

      <Footer />
      <FloatingButton onHowToBuyClick={() => setIsHowToBuyOpen(true)} />

      <OrderPanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)} />
      <Modal isOpen={isHowToBuyOpen} onClose={() => setIsHowToBuyOpen(false)} title="¿Cómo comprar?">
        <HowToBuyContent />
      </Modal>
    </div>
  );
}

export default App;
