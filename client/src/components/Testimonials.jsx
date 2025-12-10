// client/src/pages/Testimonials/Testimonials.jsx
import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Importamos iconos de estrella llena y vacía
import useFetch from '../hooks/useFetch'; // 1. Importa el hook
import './Testimonials.css';

// Pequeño componente auxiliar para renderizar las estrellas
const StarRating = ({ rating }) => {
  const totalStars = 5;
  const stars = [];
  for (let i = 1; i <= totalStars; i++) {
    stars.push(i <= rating ? <FaStar key={i} /> : <FaRegStar key={i} />);
  }
  return <div className="star-rating">{stars}</div>;
};

function Testimonials() {
  // 2. Reemplaza toda la lógica de fetch con nuestro hook
  const { data: testimonials, loading, error } = useFetch('/api/testimonials');
  // Eliminado useEffect redundante: useFetch ya maneja la lógica de fetch y estado.
  // 3. La lógica de renderizado permanece igual
  if (loading) return <div className="loading-message">Cargando testimonios...</div>;
  if (error) return <div className="error-message">Error: {error.message}</div>;
 return (
    <div className="testimonials-page">
      <h1>Lo que dicen nuestros clientes</h1>
      <p className="page-subtitle">Opiniones y experiencias de nuestra increíble comunidad.</p>
      
      <div className="testimonials-grid">
        {testimonials && testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-header">
              <img src={testimonial.avatar} alt={`Avatar de ${testimonial.author}`} className="testimonial-avatar" />
              <div className="author-info">
                <span className="testimonial-author">{testimonial.author}</span>
                <StarRating rating={testimonial.rating} />
              </div>
            </div>
            <p className="testimonial-quote">"{testimonial.quote}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;