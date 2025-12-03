// client/src/components/HowToBuyContent.jsx
import React from 'react';
import { FaSearch, FaMousePointer, FaShoppingBag, FaCreditCard, FaBoxOpen } from 'react-icons/fa';
import '../pages/HowToBuy/HowToBuy.css';

const steps = [
  {
    icon: <FaSearch />,
    title: 'Paso 1: Explora Nuestros Catálogos',
    description:
      'Revisa nuestros catálogos digitales (en línea o en PDF) y descubre la variedad de productos disponibles. Usa la barra de búsqueda si ya tienes algo en mente o ingresa la marca que buscas.',
  },
  {
    icon: <FaMousePointer />,
    title: 'Paso 2: Elige tus Productos',
    description:
      'Anota el código, nombre o referencia del producto que te interesa. En algunos casos podrás ver detalles como tallas, colores o fotos adicionales.',
  },
  {
    icon: <FaShoppingBag />,
    title: 'Paso 3: Añade a tu Bolsa de Compras',
    description:
      'Ingresa el código seleccionado del producto desde el catálogo para añadirlo a tu bolsa. Utiliza el formulario rápido para capturar varias referencias.',
  },
  {
    icon: <FaCreditCard />,
    title: 'Paso 4: Confirma y Paga de Forma Segura',
    description:
      'Revisa tu bolsa de compras y confirma tu selección. Envía el pedido a través de WhatsApp. Te llegará la respuesta con el costo total de tu pedido.',
  },
  {
    icon: <FaBoxOpen />,
    title: 'Paso 5: Recibe tu Pedido',
    description:
      'Una vez confirmado el pago, gestionaremos tu pedido directamente con el proveedor del catálogo y haremos la entrega. ¡Así de fácil!',
  },
];

function HowToBuyContent() {
  return (
    <div className="how-to-buy-content">
      <section className="steps-section" style={{ padding: 20 }}>
        {/* <div className="steps-title">🛒 Cómo Comprar en Nuestra Tienda por Catálogo</div> */}
        <div className="steps-timeline" style={{ border: 'none', marginLeft: 20 }}>
          {steps.map((step, index) => (
            <div className="step-item" key={index} style={{ marginLeft: '2rem' }}>
              <div className="step-icon-wrapper">
                <div className="step-icon">{step.icon}</div>
              </div>
              <div
                className="step-content"
                style={{ marginLeft: '2rem', boxShadow: 'none', background: 'transparent', padding: '0 0 0 1rem' }}
              >
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
