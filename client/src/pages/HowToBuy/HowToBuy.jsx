// client/src/pages/HowToBuy/HowToBuy.jsx
import React from 'react';
import { FaSearch, FaMousePointer, FaShoppingCart, FaCreditCard, FaBoxOpen } from 'react-icons/fa';
import './HowToBuy.css';

const steps = [
  {
    icon: <FaSearch />,
    title: "Paso 1: Explora Nuestros Catálogos",
    description: "Navega a través de nuestras diferentes categorías de productos. Usa la barra de búsqueda si ya sabes lo que quieres."
  },
  {
    icon: <FaMousePointer />,
    title: "Paso 2: Selecciona tus Productos",
    description: "Haz clic en los productos que te interesan para ver sus detalles, como tallas, colores disponibles y más fotos."
  },
  {
    icon: <FaShoppingCart />,
    title: "Paso 3: Añade al Carrito",
    description: "Una vez que te decidas por un producto, haz clic en el botón 'Añadir al Carrito'. Puedes seguir comprando o proceder al pago."
  },
  {
    icon: <FaCreditCard />,
    title: "Paso 4: Proceso de Pago Seguro",
    description: "Ve a tu carrito de compras y sigue las instrucciones para el pago. Usamos pasarelas de pago 100% seguras."
  },
  {
    icon: <FaBoxOpen />,
    title: "Paso 5: Recibe tu Pedido",
    description: "¡Listo! Una vez confirmado el pago, prepararemos tu pedido y te lo enviaremos a la dirección que nos indicaste. ¡Disfruta tu compra!"
  }
];

function HowToBuy() {
  return (
    <div className="how-to-buy-page">
      <header className="page-header-alt">
        <div className="container">
          <h1>¿Cómo Comprar?</h1>
          <p className="page-subtitle">Comprar en SonicStore es fácil, rápido y seguro. Sigue estos simples pasos:</p>
        </div>
      </header>

      <section className="steps-section">
        <div className="container">
          <div className="steps-timeline">
            {steps.map((step, index) => (
              <div className="step-item" key={index}>
                <div className="step-icon-wrapper">
                  <div className="step-icon">{step.icon}</div>
                </div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HowToBuy;