// client/src/pages/Contact/Contact.jsx
import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  // 1. Estado para almacenar los datos de todos los campos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  // 2. Estado para manejar el feedback de envío al usuario
  const [submissionStatus, setSubmissionStatus] = useState(null); // puede ser 'success', 'error' o null

  // 3. Handler que se actualiza con cada cambio en cualquier input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // 4. Handler para cuando se envía el formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene la recarga de la pagina
    setSubmissionStatus('loading');

    try {
      // Simulamos una solicitud para evitar depender del backend
      await new Promise(resolve => setTimeout(resolve, 800));
      setSubmissionStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Limpia el formulario
    } catch (error) {
      setSubmissionStatus('error');
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <div className="contact-page">
      <h2>Ponte en Contacto</h2>
      <p className="page-subtitle">¿Tienes alguna pregunta? ¡Nos encantaría saber de ti!</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nombre Completo</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Tu Mensaje</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn" disabled={submissionStatus === 'loading'}>
          {submissionStatus === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
        </button>
        
        {/* Mensajes de feedback */}
        {submissionStatus === 'success' && (
          <p className="feedback-message success">¡Mensaje enviado con éxito!</p>
        )}
        {submissionStatus === 'error' && (
          <p className="feedback-message error">Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.</p>
        )}
      </form>
    </div>
  );
}

export default Contact;
