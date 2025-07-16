// server/index.js

const express = require('express');
const cors = require('cors');

// 1. Inicialización
const app = express();
const PORT = 3001; // Usaremos un puerto diferente al del cliente

// 2. Middlewares
// Permite que nuestro servidor acepte peticiones desde el cliente (React)
app.use(cors()); 
// Permite que el servidor entienda datos enviados en formato JSON
app.use(express.json()); 

// 3. Rutas (Endpoints)
// Ruta de prueba para ver si el servidor funciona
app.get('/api', (req, res) => {
  res.json({ message: "¡Hola desde el servidor Express!" });
});

// 4. Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});