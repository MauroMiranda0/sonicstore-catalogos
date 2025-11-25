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

// Importa tus imágenes
import img1 from '../assets/gallery/gallery1.jpg';
import img2 from '../assets/gallery/gallery2.jpg';
import img3 from '../assets/gallery/gallery3.jpg';
import img4 from '../assets/gallery/gallery4.jpg';
import img5 from '../assets/gallery/gallery5.jpg';
import img6 from '../assets/gallery/gallery6.jpg';
import img7 from '../assets/gallery/gallery7.jpg';
import img8 from '../assets/gallery/gallery8.jpg';
import img9 from '../assets/gallery/gallery9.jpg';
import img10 from '../assets/gallery/gallery10.jpg';
import img11 from '../assets/gallery/gallery11.jpg';
import img12 from '../assets/gallery/gallery12.jpg';
import img13 from '../assets/gallery/gallery13.jpg';
import img14 from '../assets/gallery/gallery14.jpg';
import img15 from '../assets/gallery/gallery15.jpg';
import img16 from '../assets/gallery/gallery16.jpeg';
import img17 from '../assets/gallery/gallery17.jpg';
import img18 from '../assets/gallery/gallery18.jpeg';
import img19 from '../assets/gallery/gallery19.jpeg';
import img20 from '../assets/gallery/gallery20.jpeg';
import img21 from '../assets/gallery/gallery21.jpeg';
import img22 from '../assets/gallery/gallery22.jpeg';
import img23 from '../assets/gallery/gallery23.jpeg';
import img24 from '../assets/gallery/gallery24.jpeg';
import img25 from '../assets/gallery/gallery25.jpeg';
import img26 from '../assets/gallery/gallery26.jpeg';
import img27 from '../assets/gallery/gallery27.jpeg';
import img28 from '../assets/gallery/gallery28.jpeg';
import img29 from '../assets/gallery/gallery29.jpeg';
import img30 from '../assets/gallery/gallery30.jpeg';
import img31 from '../assets/gallery/gallery31.jpeg';
import img32 from '../assets/gallery/gallery32.jpeg';
import img33 from '../assets/gallery/gallery33.jpeg';
import img34 from '../assets/gallery/gallery34.jpeg';
import img35 from '../assets/gallery/gallery35.jpeg';
import img36 from '../assets/gallery/gallery36.jpeg';

export const images = [
  { src: img1, alt: 'Imagen 1', title: 'Sudadera urbana', price: '$89', sku: 'SKU-3001', description: 'Sudadera ligera con capucha para uso diario.', features: ['Algodón suave', 'Capucha ajustable', 'Bolsillo frontal'] },
  { src: img2, alt: 'Imagen 2', title: 'Conjunto deportivo tierra', price: '$75', sku: 'SKU-3002', description: 'Joggers y tenis en tonos neutros.', features: ['Tela transpirable', 'Corte slim', 'Secado rápido'] },
  { src: img3, alt: 'Imagen 3', title: 'Camisa utilitaria', price: '$98', sku: 'SKU-3003', description: 'Camisa denim con bolsillos funcionales.', features: ['Tela resistente', 'Botones metálicos', 'Corte relajado'] },
  { src: img4, alt: 'Imagen 4', title: 'Set monocromo básico', price: '$65', sku: 'SKU-3004', description: 'Playera y pantalón monocromo.', features: ['Algodón orgánico', 'Costuras reforzadas', 'Ajuste regular'] },
  { src: img5, alt: 'Imagen 5', title: 'Blazer ejecutivo', price: '$120', sku: 'SKU-3005', description: 'Blazer estructurado para oficina moderna.', features: ['Forro suave', 'Botonadura clásica', 'Corte slim'] },
  { src: img6, alt: 'Imagen 6', title: 'Weekend casual', price: '$72', sku: 'SKU-3006', description: 'Conjunto liviano para escapadas.', features: ['Tejido fresco', 'Sneakers livianos', 'Tono versátil'] },
  { src: img7, alt: 'Imagen 7', title: 'Vestido camisero', price: '$110', sku: 'SKU-3007', description: 'Vestido fluido con cinturón.', features: ['Cinturón incluido', 'Botones nacarados', 'Tela ligera'] },
  { src: img8, alt: 'Imagen 8', title: 'Color pastel chic', price: '$95', sku: 'SKU-3008', description: 'Bloques de color suaves para verano.', features: ['Tela respirable', 'Corte relajado', 'Costuras planas'] },
  { src: img9, alt: 'Imagen 9', title: 'Abrigo street', price: '$130', sku: 'SKU-3009', description: 'Abrigo ligero repelente al agua.', features: ['Capucha desmontable', 'Bolsillos con zipper', 'Tela impermeable'] },
  { src: img10, alt: 'Imagen 10', title: 'Playera minimal', price: '$40', sku: 'SKU-3010', description: 'Playera básica monocromo.', features: ['Algodón orgánico', 'Corte regular', 'Costuras reforzadas'] },
  { src: img11, alt: 'Imagen 11', title: 'Blazer slim fit', price: '$125', sku: 'SKU-3011', description: 'Blazer moderno para juntas.', features: ['Botones metálicos', 'Forro transpirable', 'Corte slim'] },
  { src: img12, alt: 'Imagen 12', title: 'Set weekend sport', price: '$80', sku: 'SKU-3012', description: 'Conjunto deportivo minimalista.', features: ['Sneakers resistentes', 'Tela stretch', 'Secado rápido'] },
  { src: img13, alt: 'Imagen 13', title: 'Vestido bohemio', price: '$118', sku: 'SKU-3013', description: 'Vestido camisero con estampado boho.', features: ['Estampado artesanal', 'Cinturón textil', 'Botones artesanales'] },
  { src: img14, alt: 'Imagen 14', title: 'Color block vibrante', price: '$99', sku: 'SKU-3014', description: 'Bloques de color intensos.', features: ['Colores vivos', 'Tela elástica', 'Corte moderno'] },
  { src: img15, alt: 'Imagen 15', title: 'Abrigo chic premium', price: '$140', sku: 'SKU-3015', description: 'Abrigo con acabados premium.', features: ['Tela italiana', 'Botones metálicos', 'Corte slim'] },
  { src: img16, alt: 'Imagen 16', title: 'Sudadera oversize', price: '$92', sku: 'SKU-3016', description: 'Sudadera amplia para estilo relajado.', features: ['Corte oversize', 'Algodón grueso', 'Capucha amplia'] },
  { src: img17, alt: 'Imagen 17', title: 'Joggers modernos', price: '$70', sku: 'SKU-3017', description: 'Joggers con detalles minimalistas.', features: ['Tela stretch', 'Cintura ajustable', 'Bolsillos ocultos'] },
  { src: img18, alt: 'Imagen 18', title: 'Camisa lino fresca', price: '$85', sku: 'SKU-3018', description: 'Camisa de lino para verano.', features: ['Tela ligera', 'Corte regular', 'Botones naturales'] },
  { src: img19, alt: 'Imagen 19', title: 'Set monocromo premium', price: '$78', sku: 'SKU-3019', description: 'Conjunto monocromo con acabados finos.', features: ['Tela satinada', 'Corte slim', 'Costuras invisibles'] },
  { src: img20, alt: 'Imagen 20', title: 'Blazer casual chic', price: '$118', sku: 'SKU-3020', description: 'Blazer relajado para oficina casual.', features: ['Tela stretch', 'Botones modernos', 'Forro transpirable'] },
  { src: img21, alt: 'Imagen 21', title: 'Weekend elegante', price: '$82', sku: 'SKU-3021', description: 'Conjunto minimalista con detalles elegantes.', features: ['Tela satinada', 'Sneakers premium', 'Corte moderno'] },
  { src: img22, alt: 'Imagen 22', title: 'Vestido minimalista', price: '$115', sku: 'SKU-3022', description: 'Vestido camisero con acabados limpios.', features: ['Corte limpio', 'Tela premium', 'Botones ocultos'] },
  { src: img23, alt: 'Imagen 23', title: 'Color block intenso', price: '$102', sku: 'SKU-3023', description: 'Bloques de color llamativos.', features: ['Colores intensos', 'Tela stretch', 'Corte moderno'] },
  { src: img24, alt: 'Imagen 24', title: 'Abrigo impermeable', price: '$135', sku: 'SKU-3024', description: 'Abrigo repelente al agua.', features: ['Tela impermeable', 'Capucha ajustable', 'Bolsillos ocultos'] },
  { src: img25, alt: 'Imagen 25', title: 'Playera gráfica', price: '$45', sku: 'SKU-3025', description: 'Playera con estampado moderno.', features: ['Algodón suave', 'Estampado duradero', 'Corte regular'] },
  { src: img26, alt: 'Imagen 26', title: 'Camisa formal', price: '$90', sku: 'SKU-3026', description: 'Camisa blanca clásica para oficina.', features: ['Tela premium', 'Corte slim', 'Botones discretos'] },
  { src: img27, alt: 'Imagen 27', title: 'Pantalón cargo', price: '$85', sku: 'SKU-3027', description: 'Pantalón cargo utilitario.', features: ['Bolsillos múltiples', 'Tela resistente', 'Corte recto'] },
  { src: img28, alt: 'Imagen 28', title: 'Chaqueta ligera', price: '$110', sku: 'SKU-3028', description: 'Chaqueta para media estación.', features: ['Tela impermeable', 'Corte ajustado', 'Capucha oculta'] },
  { src: img29, alt: 'Imagen 29', title: 'Vestido de verano', price: '$95', sku: 'SKU-3029', description: 'Vestido ligero para días cálidos.', features: ['Tela fresca', 'Estampado floral', 'Corte fluido'] },
  { src: img30, alt: 'Imagen 30', title: 'Sudadera deportiva', price: '$88', sku: 'SKU-3030', description: 'Sudadera con detalles atléticos.', features: ['Tela transpirable', 'Capucha ajustable', 'Corte regular'] },
  { src: img31, alt: 'Imagen 31', title: 'Camisa estampada', price: '$92', sku: 'SKU-3031', description: 'Camisa con estampado geométrico moderno.', features: ['Estampado geométrico', 'Tela ligera', 'Corte regular'] },
  { src: img32, alt: 'Imagen 32', title: 'Pantalón formal', price: '$99', sku: 'SKU-3032', description: 'Pantalón de vestir slim fit.', features: ['Tela premium', 'Corte slim', 'Bolsillos discretos'] },
  { src: img33, alt: 'Imagen 33', title: 'Chaqueta bomber', price: '$115', sku: 'SKU-3033', description: 'Chaqueta bomber con detalles metálicos.', features: ['Cierre metálico', 'Tela resistente', 'Puños elásticos'] },
  { src: img34, alt: 'Imagen 34', title: 'Vestido elegante noche', price: '$150', sku: 'SKU-3034', description: 'Vestido largo para eventos nocturnos.', features: ['Tela satinada', 'Corte ajustado', 'Detalles brillantes'] },
  { src: img35, alt: 'Imagen 35', title: 'Sudadera con zipper', price: '$85', sku: 'SKU-3035', description: 'Sudadera con cierre frontal y bolsillos laterales.', features: ['Cierre frontal', 'Capucha ajustable', 'Algodón suave'] },
  { src: img36, alt: 'Imagen 36', title: 'Abrigo invernal', price: '$160', sku: 'SKU-3036', description: 'Abrigo grueso para invierno frío.', features: ['Forro térmico', 'Capucha amplia', 'Botones resistentes'] }
];

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
