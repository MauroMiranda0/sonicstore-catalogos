// client/src/pages/Testimonials/Testimonials.jsx
import React, { useState, useEffect } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Importamos iconos de estrella llena y vacía
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
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/testimonials')
      .then(response => {
        if (!response.ok) { throw new Error('No se pudieron cargar los testimonios.'); }
        return response.json();
      })
      .then(data => {
        setTestimonials(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading-message">Cargando testimonios...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div className="testimonials-page">
      <h2>Lo que dicen nuestros clientes</h2>
      <p className="page-subtitle">Opiniones y experiencias de nuestra increíble comunidad.</p>
      
      <div className="testimonials-grid">
        {testimonials.map(testimonial => (
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