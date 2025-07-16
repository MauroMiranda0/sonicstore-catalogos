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
  { id: 201, author: 'María León', quote: 'Los zapatos deportivos son súper cómodos. Perfectos para mi rutina diaria.', avatar: 'https://i.pravatar.cc/150?u=marialuisa' },
  { id: 202, author: 'Ana Sofía', quote: 'El maquillaje natural me sorprendió. Textura ligera y muy duradero.', avatar: 'https://i.pravatar.cc/150?u=anasofia' },
  { id: 203, author: 'Luis Gutiérrez', quote: 'Compré ropa formal para mi trabajo y quedé encantado con la calidad y el estilo.', avatar: 'https://i.pravatar.cc/150?u=luis' },
  { id: 204, author: 'Carmen Ortega', quote: 'La decoración para el hogar transformó mi sala. ¡Todo muy elegante y funcional!', avatar: 'https://i.pravatar.cc/150?u=carmen' },
  { id: 205, author: 'Daniela Ruiz', quote: 'Los organizadores me ayudaron a tener un hogar más ordenado. ¡Gracias por la variedad!', avatar: 'https://i.pravatar.cc/150?u=daniela' },
];

module.exports = {
  catalogs,
  testimonials, // Exportamos los nuevos datos
};
// Este archivo exporta un arreglo de objetos que representan los catálogos de productos y los testimonios de clientes.
