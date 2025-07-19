// server/mockData.js
const catalogs = [
  { id: 1, name: 'Zapatos Deportivos', description: 'Calzado cómodo y moderno para entrenamiento y uso diario.', image: 'https://via.placeholder.com/300x200.png?text=Zapatos+Deportivos' },
  { id: 2, name: 'Zapatos Elegantes', description: 'Estilo y sofisticación para ocasiones especiales.', image: 'https://via.placeholder.com/300x200.png?text=Zapatos+Elegantes' },
  { id: 3, name: 'Maquillaje Natural', description: 'Productos suaves para un look fresco y diario.', image: 'https://via.placeholder.com/300x200.png?text=Maquillaje+Natural' },
  { id: 4, name: 'Maquillaje Profesional', description: 'Alta cobertura y larga duración para eventos y sesiones.', image: 'https://via.placeholder.com/300x200.png?text=Maquillaje+Profesional' },
  { id: 5, name: 'Ropa Casual', description: 'Moda relajada y cómoda para el día a día.', image: 'https://via.placeholder.com/300x200.png?text=Ropa+Casual' },
  { id: 6, name: 'Ropa Formal', description: 'Prendas elegantes ideales para oficina o eventos.', image: 'https://via.placeholder.com/300x200.png?text=Ropa+Formal' },
  { id: 7, name: 'Decoración de Hogar', description: 'Artículos decorativos para transformar tus espacios.', image: 'https://via.placeholder.com/300x200.png?text=Decoración+Hogar' },
  { id: 8, name: 'Electrodomésticos', description: 'Soluciones prácticas para tu cocina y limpieza.', image: 'https://via.placeholder.com/300x200.png?text=Electrodomésticos' },
  { id: 9, name: 'Ropa de Cama', description: 'Sábanas, edredones y almohadas para un descanso cómodo.', image: 'https://via.placeholder.com/300x200.png?text=Ropa+de+Cama' },
  { id: 10, name: 'Organizadores para el Hogar', description: 'Cajas, estantes y soluciones inteligentes para ordenar.', image: 'https://via.placeholder.com/300x200.png?text=Organizadores' },
];

// NUEVOS DATOS
const testimonials = [
  { id: 101, author: 'Carlos Santana', quote: 'La selección de productos es simplemente celestial. Encontré el estilo que buscaba por años.', avatar: 'https://i.pravatar.cc/150?u=carlos', rating: 5 },
  { id: 102, author: 'Flea', quote: '¡Estos zapatos tienen un look increíble! El servicio al cliente fue de primera.', avatar: 'https://i.pravatar.cc/150?u=flea', rating: 5 },
  { id: 103, author: 'Alicia Keys', quote: 'El maquillaje que compré tiene una pigmentación y un acabado espectacular. La entrega fue rapidísima.', avatar: 'https://i.pravatar.cc/150?u=alicia', rating: 4 },
  //{ id: 104, author: 'John Bonham', quote: '¡Boom! Los artículos para el hogar son de una calidad increíble. ¡Recomendado!', avatar: 'https://i.pravatar.cc/150?u=john', rating: 5 },
];

const products = [
  { id: 201, catalogId: 1, name: 'Classic Striped Shirt', price: 40.00, image: 'https://i.imgur.com/QpjH5Jz.jpg', featured: true },
  { id: 202, catalogId: 1, name: 'Elegance White Dress', price: 75.00, image: 'https://i.imgur.com/r652d3p.jpg', featured: true },
  { id: 203, catalogId: 1, name: '4 Button Blazer', price: 120.00, image: 'https://i.imgur.com/dJb2tA9.jpg', featured: true },
  { id: 204, catalogId: 1, name: 'Varsity Jacket', price: 95.00, image: 'https://i.imgur.com/mgpCjXU.jpg', featured: true },
  { id: 205, catalogId: 2, name: 'Radiant Finish Foundation', price: 35.00, image: 'https://i.imgur.com/S2m2t2S.jpg', featured: false },
  { id: 206, catalogId: 2, name: 'Velvet Matte Lipstick', price: 22.00, image: 'https://i.imgur.com/K1vB7vO.jpg', featured: true },
  { id: 207, catalogId: 3, name: 'Platform Ankle Boots', price: 85.00, image: 'https://i.imgur.com/o7z4D5r.jpg', featured: false },
];


// No olvides exportar los nuevos datos
module.exports = {
  catalogs,
  testimonials,
  products,
};
// Este archivo exporta un arreglo de objetos que representan los catálogos de productos y los testimonios de clientes.
