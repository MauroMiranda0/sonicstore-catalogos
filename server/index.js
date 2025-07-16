// server/index.js

const express = require('express');
const cors = require('cors');
const { catalogs } = require('./mockData'); // 1. Importa los datos

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Ruta de prueba existente
// RUTA: Obtener todos los catálogos
app.get('/api/catalogs', (req, res) => {
  res.json(catalogs);
});

// NUEVA RUTA: Obtener un solo catálogo por su ID
app.get('/api/catalogs/:id', (req, res) => {
  // 1. Obtenemos el ID de los parámetros de la URL
  const id = parseInt(req.params.id); // req.params.id es un string, lo convertimos a número

  // 2. Buscamos el catálogo en nuestros datos de prueba
  const catalog = catalogs.find(c => c.id === id);

  // 3. Respondemos
  if (catalog) {
    res.json(catalog); // Si lo encontramos, lo enviamos
  } else {
    // Si no existe un catálogo con ese ID, enviamos un error 404
    res.status(404).json({ message: 'Catálogo no encontrado' });
  }
});
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});