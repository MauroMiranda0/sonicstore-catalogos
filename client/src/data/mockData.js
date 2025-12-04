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
  { src: img1, alt: 'Imagen 1', title: 'Sudadera urbana', sku: 'SKU-3001', description: 'Sudadera ligera con capucha para uso diario.', features: ['Algodón suave', 'Capucha ajustable', 'Bolsillo frontal'] },
  { src: img2, alt: 'Imagen 2', title: 'Conjunto deportivo tierra', sku: 'SKU-3002', description: 'Joggers y tenis en tonos neutros.', features: ['Tela transpirable', 'Corte slim', 'Secado rápido'] },
  { src: img3, alt: 'Imagen 3', title: 'Camisa utilitaria', sku: 'SKU-3003', description: 'Camisa denim con bolsillos funcionales.', features: ['Tela resistente', 'Botones metálicos', 'Corte relajado'] },
  { src: img4, alt: 'Imagen 4', title: 'Set monocromo básico', sku: 'SKU-3004', description: 'Playera y pantalón monocromo.', features: ['Algodón orgánico', 'Costuras reforzadas', 'Ajuste regular'] },
  { src: img5, alt: 'Imagen 5', title: 'Blazer ejecutivo',  sku: 'SKU-3005', description: 'Blazer estructurado para oficina moderna.', features: ['Forro suave', 'Botonadura clásica', 'Corte slim'] },
  { src: img6, alt: 'Imagen 6', title: 'Weekend casual', sku: 'SKU-3006', description: 'Conjunto liviano para escapadas.', features: ['Tejido fresco', 'Sneakers livianos', 'Tono versátil'] },
  { src: img7, alt: 'Imagen 7', title: 'Vestido camisero',  sku: 'SKU-3007', description: 'Vestido fluido con cinturón.', features: ['Cinturón incluido', 'Botones nacarados', 'Tela ligera'] },
  { src: img8, alt: 'Imagen 8', title: 'Color pastel chic', sku: 'SKU-3008', description: 'Bloques de color suaves para verano.', features: ['Tela respirable', 'Corte relajado', 'Costuras planas'] },
  { src: img9, alt: 'Imagen 9', title: 'Abrigo street',  sku: 'SKU-3009', description: 'Abrigo ligero repelente al agua.', features: ['Capucha desmontable', 'Bolsillos con zipper', 'Tela impermeable'] },
  { src: img10, alt: 'Imagen 10', title: 'Playera minimal', sku: 'SKU-3010', description: 'Playera básica monocromo.', features: ['Algodón orgánico', 'Corte regular', 'Costuras reforzadas'] },
  { src: img11, alt: 'Imagen 11', title: 'Blazer slim fit',  sku: 'SKU-3011', description: 'Blazer moderno para juntas.', features: ['Botones metálicos', 'Forro transpirable', 'Corte slim'] },
  { src: img12, alt: 'Imagen 12', title: 'Set weekend sport', sku: 'SKU-3012', description: 'Conjunto deportivo minimalista.', features: ['Sneakers resistentes', 'Tela stretch', 'Secado rápido'] },
  { src: img13, alt: 'Imagen 13', title: 'Vestido bohemio',  sku: 'SKU-3013', description: 'Vestido camisero con estampado boho.', features: ['Estampado artesanal', 'Cinturón textil', 'Botones artesanales'] },
  { src: img14, alt: 'Imagen 14', title: 'Color block vibrante', sku: 'SKU-3014', description: 'Bloques de color intensos.', features: ['Colores vivos', 'Tela elástica', 'Corte moderno'] },
  { src: img15, alt: 'Imagen 15', title: 'Abrigo chic premium',  sku: 'SKU-3015', description: 'Abrigo con acabados premium.', features: ['Tela italiana', 'Botones metálicos', 'Corte slim'] },
  { src: img16, alt: 'Imagen 16', title: 'Sudadera oversize', sku: 'SKU-3016', description: 'Sudadera amplia para estilo relajado.', features: ['Corte oversize', 'Algodón grueso', 'Capucha amplia'] },
  { src: img17, alt: 'Imagen 17', title: 'Joggers modernos', sku: 'SKU-3017', description: 'Joggers con detalles minimalistas.', features: ['Tela stretch', 'Cintura ajustable', 'Bolsillos ocultos'] },
  { src: img18, alt: 'Imagen 18', title: 'Camisa lino fresca', sku: 'SKU-3018', description: 'Camisa de lino para verano.', features: ['Tela ligera', 'Corte regular', 'Botones naturales'] },
  { src: img19, alt: 'Imagen 19', title: 'Set monocromo premium', sku: 'SKU-3019', description: 'Conjunto monocromo con acabados finos.', features: ['Tela satinada', 'Corte slim', 'Costuras invisibles'] },
  { src: img20, alt: 'Imagen 20', title: 'Blazer casual chic',  sku: 'SKU-3020', description: 'Blazer relajado para oficina casual.', features: ['Tela stretch', 'Botones modernos', 'Forro transpirable'] },
  { src: img21, alt: 'Imagen 21', title: 'Weekend elegante', sku: 'SKU-3021', description: 'Conjunto minimalista con detalles elegantes.', features: ['Tela satinada', 'Sneakers premium', 'Corte moderno'] },
  { src: img22, alt: 'Imagen 22', title: 'Vestido minimalista',  sku: 'SKU-3022', description: 'Vestido camisero con acabados limpios.', features: ['Corte limpio', 'Tela premium', 'Botones ocultos'] },
  { src: img23, alt: 'Imagen 23', title: 'Color block intenso',  sku: 'SKU-3023', description: 'Bloques de color llamativos.', features: ['Colores intensos', 'Tela stretch', 'Corte moderno'] },
  { src: img24, alt: 'Imagen 24', title: 'Abrigo impermeable',  sku: 'SKU-3024', description: 'Abrigo repelente al agua.', features: ['Tela impermeable', 'Capucha ajustable', 'Bolsillos ocultos'] },
  { src: img25, alt: 'Imagen 25', title: 'Playera gráfica', sku: 'SKU-3025', description: 'Playera con estampado moderno.', features: ['Algodón suave', 'Estampado duradero', 'Corte regular'] },
  { src: img26, alt: 'Imagen 26', title: 'Camisa formal', sku: 'SKU-3026', description: 'Camisa blanca clásica para oficina.', features: ['Tela premium', 'Corte slim', 'Botones discretos'] },
  { src: img27, alt: 'Imagen 27', title: 'Pantalón cargo', sku: 'SKU-3027', description: 'Pantalón cargo utilitario.', features: ['Bolsillos múltiples', 'Tela resistente', 'Corte recto'] },
  { src: img28, alt: 'Imagen 28', title: 'Chaqueta ligera',  sku: 'SKU-3028', description: 'Chaqueta para media estación.', features: ['Tela impermeable', 'Corte ajustado', 'Capucha oculta'] },
  { src: img29, alt: 'Imagen 29', title: 'Vestido de verano', sku: 'SKU-3029', description: 'Vestido ligero para días cálidos.', features: ['Tela fresca', 'Estampado floral', 'Corte fluido'] },
  { src: img30, alt: 'Imagen 30', title: 'Sudadera deportiva', sku: 'SKU-3030', description: 'Sudadera con detalles atléticos.', features: ['Tela transpirable', 'Capucha ajustable', 'Corte regular'] },
  { src: img31, alt: 'Imagen 31', title: 'Camisa estampada', sku: 'SKU-3031', description: 'Camisa con estampado geométrico moderno.', features: ['Estampado geométrico', 'Tela ligera', 'Corte regular'] },
  { src: img32, alt: 'Imagen 32', title: 'Pantalón formal', sku: 'SKU-3032', description: 'Pantalón de vestir slim fit.', features: ['Tela premium', 'Corte slim', 'Bolsillos discretos'] },
  { src: img33, alt: 'Imagen 33', title: 'Chaqueta bomber',  sku: 'SKU-3033', description: 'Chaqueta bomber con detalles metálicos.', features: ['Cierre metálico', 'Tela resistente', 'Puños elásticos'] },
  { src: img34, alt: 'Imagen 34', title: 'Vestido elegante noche',  sku: 'SKU-3034', description: 'Vestido largo para eventos nocturnos.', features: ['Tela satinada', 'Corte ajustado', 'Detalles brillantes'] },
  { src: img35, alt: 'Imagen 35', title: 'Sudadera con zipper', sku: 'SKU-3035', description: 'Sudadera con cierre frontal y bolsillos laterales.', features: ['Cierre frontal', 'Capucha ajustable', 'Algodón suave'] },
  { src: img36, alt: 'Imagen 36', title: 'Abrigo invernal',  sku: 'SKU-3036', description: 'Abrigo grueso para invierno frío.', features: ['Forro térmico', 'Capucha amplia', 'Botones resistentes'] }
];

export const naturaProducts = [
  {
    id: 'NATMEX-95937',
    name: 'Crema Nutritiva para Manos Tododia Cereza y Avellana 50 ml',
    brand: 'Tododia',
    price: 132.0,
    rating: 4.0,
    image: 'https://production.na01.natura.com/on/demandware.static/-/Sites-nat-mex-b2b2c-catalog/default/dw1646596f/produtos/NATMEX-95937_1.jpg',
    url: 'https://www.natura.com.mx/p/crema-nutritiva-para-manos-tododia-cereza-y-avellana-50-ml/NATMEX-95937?position=1&listTitle=manual+showcase+-+descubre+el+mundo+natura',
  },
  {
    id: 'NATMEX-99183',
    name: 'Crema Nutritiva para el Cuerpo Tododia Cereza y Avellana 400 ml',
    brand: 'Tododia',
    price: 255.0,
    rating: 4.8,
    image: 'https://production.na01.natura.com/on/demandware.static/-/Sites-nat-mex-b2b2c-catalog/default/dw7988583a/produtos/NATMEX-99183_1.jpg',
    url: 'https://www.natura.com.mx/p/crema-nutritiva-para-el-cuerpo-tododia-cereza-y-avellana-400-ml/NATMEX-99183?position=2&listTitle=manual+showcase+-+descubre+el+mundo+natura',
  },
  {
    id: 'NATMEX-21307',
    name: 'Aceite Bifasico Corporal Tododia Cereza y Avellana 120 ml',
    brand: 'Tododia',
    price: 285.0,
    rating: null,
    image: 'https://production.na01.natura.com/on/demandware.static/-/Sites-nat-mex-b2b2c-catalog/default/dw6726bca8/produtos/NATMEX-21307_1.jpg',
    url: 'https://www.natura.com.mx/p/aceite-bifasico-corporal-tododia-cereza-y-avellana-120-ml/NATMEX-21307?position=3&listTitle=manual+showcase+-+descubre+el+mundo+natura',
  },
  {
    id: 'NATMEX-23218',
    name: 'Crema Nutritiva para el Cuerpo Tododia Cereza y Avellana 200 ml',
    brand: 'Tododia',
    price: 167.0,
    rating: 5.0,
    image: 'https://production.na01.natura.com/on/demandware.static/-/Sites-nat-mex-b2b2c-catalog/default/dwa25859d6/produtos/NATMEX-23218_1.jpg',
    url: 'https://www.natura.com.mx/p/crema-nutritiva-para-el-cuerpo-tododia-cereza-y-avellana-200-ml/NATMEX-23218?position=4&listTitle=manual+showcase+-+descubre+el+mundo+natura',
  },
  {
    id: 'NATMEX-95840',
    name: 'Jabon en Barra Puro Vegetal Tododia Cereza y Avellana 5x90 g',
    brand: 'Tododia',
    price: 153.3,
    rating: 5.0,
    image: 'https://production.na01.natura.com/on/demandware.static/-/Sites-nat-mex-b2b2c-catalog/default/dw57f7a13b/produtos/PRODUTO/NATMEX-95840_1.jpg',
    url: 'https://www.natura.com.mx/p/jabon-en-barra-puro-vegetal-tododia-cereza-y-avellana-5-unidades-de-90-g/NATMEX-95840?position=5&listTitle=manual+showcase+-+descubre+el+mundo+natura',
  },
  {
    id: 'NATMEX-95843',
    name: 'Jabon Liquido en Gel Tododia Cereza y Avellana 300 ml',
    brand: 'Tododia',
    price: 238.0,
    rating: null,
    image: 'https://production.na01.natura.com/on/demandware.static/-/Sites-nat-mex-b2b2c-catalog/default/dwa7fae200/produtos/NATMEX-95843_1.jpg',
    url: 'https://www.natura.com.mx/p/jabon-liquido-en-gel-tododia-cereza-y-avellana-300-ml/NATMEX-95843?position=6&listTitle=manual+showcase+-+descubre+el+mundo+natura',
  },
  {
    id: 'NATMEX-148001',
    name: 'Desodorante Antitranspirante en Crema Tododia Cereza y Avellana 80 g',
    brand: 'Tododia',
    price: 108.0,
    rating: 5.0,
    image: 'https://production.na01.natura.com/on/demandware.static/-/Sites-nat-mex-b2b2c-catalog/default/dw8c61a7c7/produtos/NATMEX-148001_1.jpg',
    url: 'https://www.natura.com.mx/p/desodorante-antitranspirante-en-crema-tododia-cereza-y-avellana-80-g/NATMEX-148001?position=7&listTitle=manual+showcase+-+descubre+el+mundo+natura',
  },
];


export const catalogs = [
  {
    id: 1,
    name: 'Natura',
    description: 'Belleza sustentable con activos vegetales de la biodiversidad brasileÇña.',
    image: catalogImg01,
    catalogUrl: 'https://www.natura.com.mx/',
    longDescription:
      'Disfruta la lÇðnea completa de bienestar de Natura: fÇürmulas con activos vegetales de la biodiversidad brasileÇña, fragancias icÇünicas y cuidado personal sustentable. Explora los catÇ­logos en lÇðnea para elegir sets, ediciones especiales y regalos de temporada con entrega a domicilio y descuentos exclusivos.',
    brandStory:
      'Natura es la marca sustentable nÇ§mero uno del mundo, fundada en 1969. Combina innovaciÇün, ingredientes de origen vegetal y un compromiso profundo con el medio ambiente para ofrecer belleza responsable y de alta calidad.',
  },
  {
    id: 2,
    name: 'Terramar Brands',
    description: 'Ciencia y naturaleza en fÇürmulas premium para la mujer latina.',
    image: catalogImg02,
    catalogUrl: 'https://ejemplo.com/catalogos/terramar',
    longDescription:
      'Terramar une ciencia y naturaleza con ingredientes premium de la tierra y el mar: ADN marino, cÇ¸lulas madre de algas, caviar y oro. Sus lÇðneas capilar, facial y de maquillaje ofrecen resultados visibles, texturas sensoriales y fÇürmulas hipoalergÇ¸nicas a precios accesibles.',
    brandStory:
      'Terramar naciÇü para brindar lujo accesible a la mujer latina. Con enfoque en investigaciÇün, ingredientes botÇ­nicos y marinos, y productos libres de crueldad, la marca entrega soluciones de belleza confiables y efectivas.',
  },
  {
    id: 3,
    name: 'Andrea',
    description: 'Moda, calzado y hogar para toda la familia, con compras seguras y recompensas.',
    image: catalogImg03,
    catalogUrl: 'https://ejemplo.com/catalogos/andrea',
    longDescription:
      'Andrea es un universo de moda y hogar para toda la familia: calzado, ropa, accesorios, belleza, electrÇünica y lÇðnea Home para renovar cada espacio. Sus catÇ­logos por temporada incluyen tendencias, outlet y beneficios como compras seguras y programas de recompensas.',
    brandStory:
      'Andrea se ha consolidado como un referente de estilo integral en MÇ¸xico. Con colecciones para mujer, hombre, niÇños y hogar, la marca combina variedad, seguridad en compras y promociones pensadas para sus clientes.',
  },
  {
    id: 4,
    name: "L'BEL",
    description: 'Cuidado de la piel avanzado, maquillaje y fragancias para regalar y lucir.',
    image: catalogImg04,
    catalogUrl: 'https://ejemplo.com/catalogos/lbel',
    longDescription:
      'Lƒ?TBEL ofrece cuidado de la piel avanzado, maquillaje, fragancias y sets para regalar. Sus catÇ­logos presentan lanzamientos, combinaciones para rutinas completas y beneficios como envÇðos gratis en compras seleccionadas.',
    brandStory:
      'Lƒ?TBEL es una marca de belleza de origen latino con enfoque en calidad y detalle. Su filosofÇða ƒ?oRegala lo excepcionalƒ?? inspira productos refinados, aromas distintivos y experiencias de compra pensadas para sorprender.',
  },
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
