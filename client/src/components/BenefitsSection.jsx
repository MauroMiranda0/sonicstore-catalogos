// client/src/components/BenefitsSection.jsx
import React from 'react';
import './BenefitsSection.css';
import { FaShieldAlt, FaHeadset, FaShippingFast, FaBoxes } from 'react-icons/fa';

const benefits = [
  { icon: <FaShieldAlt />, title: 'Compra Segura', text: 'Tus datos protegidos en todo momento.' },
  { icon: <FaHeadset />, title: 'Atención Personalizada', text: 'Estamos aquí para ayudarte 24/7.' },
  { icon: <FaShippingFast />, title: 'Entregas Rápidas', text: 'Recibe tus productos en tiempo récord.' },
  { icon: <FaBoxes />, title: 'Variedad de Productos', text: 'Miles de artículos en nuestros catálogos.' },
];

function BenefitsSection() {
  return (
    <section className="benefits-section">
      <div className="container">
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div className="benefit-card" key={index}>
              <div className="benefit-icon">{benefit.icon}</div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-text">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;