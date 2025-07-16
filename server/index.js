// server/index.js

const express = require('express');
const cors = require('cors');
const { catalogs } = require('./mockData'); // 1. Importa los datos

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Ruta de prueba existente
app.get('/api', (req, res) => {
  res.json({ message: "¡Hola desde el servidor Express!" });
});

// 2. NUEVA RUTA: Obtener todos los catálogos
app.get('/api/catalogs', (req, res) => {
  // Por ahora, simplemente devolvemos la lista completa
  res.json(catalogs);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});