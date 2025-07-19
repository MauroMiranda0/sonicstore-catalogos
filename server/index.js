// server/index.js

const express = require('express');
const cors = require('cors');
const { catalogs, testimonials, products } = require('./mockData'); // 1. Importa los datos

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Ruta de prueba existente
// NUEVA RUTA: Obtener productos, con opción de filtrar por destacados
app.get('/api/products', (req, res) => {
  // Verificamos si la URL tiene un query parameter "?featured=true"
  const { featured } = req.query; 

  if (featured === 'true') {
    const featuredProducts = products.filter(p => p.featured);
    res.json(featuredProducts);
  } else {
    // Si no se pide filtrar, se devuelven todos
    res.json(products);
  }
});
// NUEVA RUTA: Obtener un solo producto por su ID
app.get('/api/products/:id', (req, res) => {
  // Obtenemos el ID de los parámetros de la URL y lo convertimos a número
  const id = parseInt(req.params.id);

  // Buscamos el producto en nuestro array de datos
  const product = products.find(p => p.id === id);

  if (product) {
    res.json(product); // Si lo encontramos, lo enviamos
  } else {
    // Si no existe, enviamos un error 404 "No Encontrado"
    res.status(404).json({ message: 'Producto no encontrado' });
  }
});
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

// NUEVA RUTA: Obtener todos los testimonios
app.get('/api/testimonials', (req, res) => {
  res.json(testimonials);
});


// NUEVA RUTA: Recibir datos del formulario de contacto
app.post('/api/contact', (req, res) => {
  // Los datos enviados desde el frontend están en `req.body`
  // Gracias al middleware `app.use(express.json());` que pusimos al principio
  const { name, email, message } = req.body;

  console.log('--- Nuevo Mensaje de Contacto Recibido ---');
  console.log('Nombre:', name);
  console.log('Email:', email);
  console.log('Mensaje:', message);
  console.log('-----------------------------------------');
  
  // En un proyecto real, aquí enviarías un email o guardarías en la base de datos.
  // Por ahora, solo simulamos el éxito.

  // Validamos que los datos no estén vacíos
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
  }

  res.status(200).json({ message: '¡Mensaje recibido con éxito! Te contactaremos pronto.' });
});

app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});