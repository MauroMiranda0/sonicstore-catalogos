// client/src/data/mockData.js
// Datos locales para evitar dependencias del backend en produccion
import catalogImg01 from '../assets/calzado-01.jpg';
import catalogImg02 from '../assets/calzado-02.jpg';
import catalogImg03 from '../assets/cosmetic-01.jpg';
import catalogImg04 from '../assets/cosmetic-02.jpg';
import catalogImg05 from '../assets/ropa-01.jpg';
import catalogImg06 from '../assets/ropa-02.jpg';
import catalogImg07 from '../assets/hogar-01.jpg';
import catalogImg08 from '../assets/hogar-02.jpg';
import catalogImg09 from '../assets/hogar-03.jpg';

import avatar0 from '../assets/cliente-0.jpg';
import avatar1 from '../assets/cliente-1.jpg';
import avatar2 from '../assets/cliente-2.jpg';

import product0 from '../assets/product-0.jpg';
import product1 from '../assets/product-1.jpg';
import product2 from '../assets/product-2.jpg';
import product3 from '../assets/product-3.jpg';
import product4 from '../assets/product-4.jpg';

export const catalogs = [
  { id: 1, name: 'Natura', description: 'Calzado comodo y moderno para entrenamiento y uso diario.', image: catalogImg01, catalogUrl: 'https://www.natura.com.mx/' },
  { id: 2, name: 'Zapatos Elegantes', description: 'Estilo y sofisticacion para ocasiones especiales.', image: catalogImg02, catalogUrl: 'https://ejemplo.com/catalogos/zapatos-elegantes' },
  { id: 3, name: 'Maquillaje Natural', description: 'Productos suaves para un look fresco y diario.', image: catalogImg03, catalogUrl: 'https://ejemplo.com/catalogos/maquillaje-natural' },
  { id: 4, name: 'Maquillaje Profesional', description: 'Alta cobertura y larga duracion para eventos y sesiones.', image: catalogImg04, catalogUrl: 'https://ejemplo.com/catalogos/maquillaje-profesional' },
  { id: 5, name: 'Ropa Casual', description: 'Moda relajada y comoda para el dia a dia.', image: catalogImg05, catalogUrl: 'https://ejemplo.com/catalogos/ropa-casual' },
  { id: 6, name: 'Ropa Formal', description: 'Prendas elegantes ideales para oficina o eventos.', image: catalogImg06, catalogUrl: 'https://ejemplo.com/catalogos/ropa-formal' },
  { id: 7, name: 'Decoracion de Hogar', description: 'Articulos decorativos para transformar tus espacios.', image: catalogImg07, catalogUrl: 'https://ejemplo.com/catalogos/decoracion-hogar' },
  { id: 8, name: 'Electrodomesticos', description: 'Soluciones practicas para tu cocina y limpieza.', image: catalogImg08, catalogUrl: 'https://ejemplo.com/catalogos/electrodomesticos' },
  { id: 9, name: 'Ropa de Cama', description: 'Sabanas, edredones y almohadas para un descanso comodo.', image: catalogImg09, catalogUrl: 'https://ejemplo.com/catalogos/ropa-de-cama' },
];

export const testimonials = [
  { id: 101, author: 'Flea', quote: 'Estos zapatos tienen un look increible y el servicio al cliente fue de primera.', avatar: avatar0, rating: 5 },
  { id: 102, author: 'Carlos Santana', quote: 'La seleccion de productos es celestial. Encontre el estilo que buscaba por anos.', avatar: avatar1, rating: 5 },
  { id: 103, author: 'Alicia Keys', quote: 'El maquillaje tiene pigmentacion y acabado espectacular. La entrega fue rapidisima.', avatar: avatar2, rating: 4 },
];

export const products = [
  { id: 201, catalogId: 1, name: 'Classic Striped Shirt', price: 40.0, image: product0, featured: true },
  { id: 202, catalogId: 1, name: 'Elegance White Dress', price: 75.0, image: product1, featured: true },
  { id: 203, catalogId: 1, name: '4 Button Blazer', price: 120.0, image: product2, featured: true },
  { id: 204, catalogId: 1, name: 'Varsity Jacket', price: 95.0, image: product3, featured: true },
  { id: 205, catalogId: 2, name: 'Velvet Matte Lipstick', price: 22.0, image: product4, featured: true },
];
