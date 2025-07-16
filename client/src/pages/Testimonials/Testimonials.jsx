// client/src/pages/Testimonials/Testimonials.jsx
import React, { useState, useEffect } from 'react';
import './Testimonials.css'; // Crearemos este archivo para los estilos

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/testimonials') // Petición al nuevo endpoint
      .then(response => {
        if (!response.ok) {
          throw new Error('No se pudieron cargar los testimonios.');
        }
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

  if (loading) return <div>Cargando testimonios...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="testimonials-page">
      <h2>Lo que dicen nuestros clientes</h2>
      <div className="testimonials-list">
        {testimonials.map(testimonial => (
          <figure key={testimonial.id} className="testimonial-card">
            <img src={testimonial.avatar} alt={`Avatar de ${testimonial.author}`} className="testimonial-avatar" />
            <blockquote className="testimonial-quote">
              "{testimonial.quote}"
            </blockquote>
            <figcaption className="testimonial-author">
              - {testimonial.author}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;