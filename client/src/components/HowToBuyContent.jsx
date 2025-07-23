// client/src/components/HowToBuyContent.jsx
import React from 'react';
import { FaSearch, FaMousePointer, FaShoppingCart, FaCreditCard, FaBoxOpen } from 'react-icons/fa';
// ¡Importante! Mueve los estilos de HowToBuy.css a este nuevo componente si quieres, 
// o crea un archivo CSS específico para él. Para simplificar, los mantendremos separados.
import '../pages/HowToBuy/HowToBuy.css'; 

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

function HowToBuyContent() {
  return (
    // Este div es opcional, pero ayuda a mantener la estructura
    <div className="how-to-buy-content">
      <section className="steps-section" style={{ padding: 0 }}>
        <div className="steps-timeline" style={{ border: 'none', marginLeft: 0 }}>
          {steps.map((step, index) => (
            <div className="step-item" key={index} style={{ marginLeft: '2rem' }}>
              <div className="step-icon-wrapper">
                <div className="step-icon">{step.icon}</div>
              </div>
              <div className="step-content" style={{ marginLeft: '2rem', boxShadow: 'none', background: 'transparent', padding: '0 0 0 1rem' }}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HowToBuyContent;