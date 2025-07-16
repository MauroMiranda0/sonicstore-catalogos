// client/src/pages/Home/Home.jsx
import React, { useState, useEffect } from 'react'; // 1. Importa los hooks

function Home() {
  // 2. Define una variable de estado para guardar el mensaje
  const [message, setMessage] = useState('');

  // 3. useEffect para ejecutar la petición a la API cuando el componente se carga
  useEffect(() => {
    // La URL completa de nuestro endpoint en el backend
    fetch('/api') // <-- LÍNEA NUEVA Y MÁS LIMPIA
      .then(response => response.json()) // Convierte la respuesta a JSON
      .then(data => setMessage(data.message)) // Actualiza el estado con el mensaje del servidor
      .catch(error => console.error("Error al obtener datos:", error)); // Manejo de errores
  }, []); // El array vacío [] asegura que el efecto se ejecute solo una vez

  return (
    <div>
      <h2>Página de Inicio</h2>
      <p>¡Bienvenido a SonicStore!</p>
      
      {/* 4. Muestra el mensaje del servidor */}
      <h3>Mensaje del Servidor:</h3>
      <p>{message || "Cargando mensaje..."}</p> 
    </div>
  );
}

export default Home;