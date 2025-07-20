// server/mockData.js
const catalogs = [
    { id: 1, name: 'Zapatos Deportivos', description: 'Calzado cómodo y moderno para entrenamiento y uso diario.', image: '../src/assets/calzado-01.jpg' },
    { id: 2, name: 'Zapatos Elegantes', description: 'Estilo y sofisticación para ocasiones especiales.', image: '../src/assets/calzado-02.jpg' },
    { id: 3, name: 'Maquillaje Natural', description: 'Productos suaves para un look fresco y diario.', image: '../src/assets/cosmetic-01.jpg' },
    { id: 4, name: 'Maquillaje Profesional', description: 'Alta cobertura y larga duración para eventos y sesiones.', image: '../src/assets/cosmetic-02.jpg' },
    { id: 5, name: 'Ropa Casual', description: 'Moda relajada y cómoda para el día a día.', image: '../src/assets/ropa-01.jpg' },
    { id: 6, name: 'Ropa Formal', description: 'Prendas elegantes ideales para oficina o eventos.', image: '../src/assets/ropa-02.jpg' },
    { id: 7, name: 'Decoración de Hogar', description: 'Artículos decorativos para transformar tus espacios.', image: '../src/assets/hogar-01.jpg' },
    { id: 8, name: 'Electrodomésticos', description: 'Soluciones prácticas para tu cocina y limpieza.', image: '../src/assets/hogar-02.jpg' },
    { id: 9, name: 'Ropa de Cama', description: 'Sábanas, edredones y almohadas para un descanso cómodo.', image: '../src/assets/hogar-03.jpg' }
];

// NUEVOS DATOS
const testimonials = [
    { id: 101, author: 'Flea', quote: '¡Estos zapatos tienen un look increíble! El servicio al cliente fue de primera.', avatar: '../src/assets/cliente-0.jpg', rating: 5 },
    { id: 102, author: 'Carlos Santana', quote: 'La selección de productos es simplemente celestial. Encontré el estilo que buscaba por años.', avatar: '../src/assets/cliente-1.jpg', rating: 5 },
    { id: 103, author: 'Alicia Keys', quote: 'El maquillaje que compré tiene una pigmentación y un acabado espectacular. La entrega fue rapidísima.', avatar: '../src/assets/cliente-2.jpg', rating: 4 },
    //{ id: 104, author: 'John Bonham', quote: '¡Boom! Los artículos para el hogar son de una calidad increíble. ¡Recomendado!', avatar: 'https://i.pravatar.cc/150?u=john', rating: 5 },
];

const products = [
    { id: 201, catalogId: 1, name: 'Classic Striped Shirt', price: 40.00, image: '../src/assets/product-0.jpg', featured: true },
    { id: 202, catalogId: 1, name: 'Elegance White Dress', price: 75.00, image: '../src/assets/product-1.jpg', featured: true },
    { id: 203, catalogId: 1, name: '4 Button Blazer', price: 120.00, image: '../src/assets/product-2.jpg', featured: true },
    { id: 204, catalogId: 1, name: 'Varsity Jacket', price: 95.00, image: '../src/assets/product-3.jpg', featured: true },
    { id: 206, catalogId: 2, name: 'Velvet Matte Lipstick', price: 22.00, image: '../src/assets/product-4.jpg', featured: true },
    { id: 203, catalogId: 1, name: '4 Button Blazer', price: 120.00, image: '../src/assets/product-2.jpg', featured: true },
    { id: 204, catalogId: 1, name: 'Varsity Jacket', price: 95.00, image: '../src/assets/product-3.jpg', featured: true },
    { id: 206, catalogId: 2, name: 'Velvet Matte Lipstick', price: 22.00, image: '../src/assets/product-4.jpg', featured: true }
];


// No olvides exportar los nuevos datos
module.exports = {
    catalogs,
    testimonials,
    products,
};
// Este archivo exporta un arreglo de objetos que representan los catálogos de productos y los testimonios de clientes.