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

const heroSlides = [
  {
    id: 'slide01',
    pretitle: 'Novedades de Temporada',
    title: 'Colección Otoño/Invierno',
    imageUrl: 'https://picsum.photos/id/1027/800/800', // Mujer con sombrero
    ctaText: 'Descubrir Colección',
    ctaLink: '/catalogs/3', // Enlaza a un catálogo existente
  },
  {
    id: 'slide02',
    pretitle: 'Esenciales de Belleza',
    title: 'Brilla con Luz Propia',
    imageUrl: 'https://picsum.photos/id/1025/800/800', // Perro? (placeholder, idealmente sería un producto de belleza)
    ctaText: 'Comprar Maquillaje',
    ctaLink: '/catalogs/5',
  },
  {
    id: 'slide03',
    pretitle: 'Estilo para tu Hogar',
    title: 'Espacios que Inspiran',
    imageUrl: 'https://picsum.photos/id/106/800/800', // Interiores de casa
    ctaText: 'Ver Artículos del Hogar',
    ctaLink: '/catalogs/4',
  }
];

module.exports = {
  catalogs,
  testimonials,
  heroSlides, // Exportamos los nuevos datos
};
// Este archivo exporta un arreglo de objetos que representan los catálogos de productos y los testimonios de clientes.
