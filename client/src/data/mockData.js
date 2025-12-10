// client/src/data/mockData.js
// Datos locales para evitar dependencias del backend en produccion
import brandImg01 from '../assets/marcas/natura.png';
import brandImg02 from '../assets/marcas/terramar.png';
import brandImg03 from '../assets/marcas/andrea.png';
import brandImg04 from '../assets/marcas/lbel.png';
import brandImg05 from '../assets/marcas/cyzone.png';
import brandImg06 from '../assets/marcas/esika.png';
import brandImg07 from '../assets/marcas/avon.png';
import brandImg08 from '../assets/marcas/ilusion.png';

import avatar0 from '../assets/cliente-0.jpg';
import avatar1 from '../assets/cliente-1.jpg';
import avatar2 from '../assets/cliente-2.jpg';

// Importa tus imágenes
import { naturaProducts } from './naturaProducts';
import { andreaProducts } from './andreaProducts';

export const catalogs = [
  {
    id: 1,
    name: 'Natura',
    description: 'Belleza sustentable con activos vegetales de la biodiversidad brasileña.',
    image: brandImg01,
    catalogUrl: 'https://www.natura.com.mx/',
    longDescription:
      'Disfruta la línea completa de bienestar de Natura: fórmulas con activos vegetales de la biodiversidad brasileña, fragancias únicas y cuidado personal sustentable. Explora los catálogos en línea para elegir sets, ediciones especiales y regalos de temporada con entrega a domicilio y descuentos exclusivos.',
    brandStory:
      'Natura es la marca sustentable nÇ§mero uno del mundo, fundada en 1969. Combina innovaciÇün, ingredientes de origen vegetal y un compromiso profundo con el medio ambiente para ofrecer belleza responsable y de alta calidad.',
  },
  {
    id: 2,
    name: 'Terramar Brands',
    description: 'Ciencia y naturaleza en fórmulas premium para la mujer latina.',
    image: brandImg02,
    catalogUrl: 'https://ejemplo.com/catalogos/terramar',
    longDescription:
      'Terramar une ciencia y naturaleza con ingredientes premium de la tierra y el mar: ADN marino, cÇ¸lulas madre de algas, caviar y oro. Sus lÇðneas capilar, facial y de maquillaje ofrecen resultados visibles, texturas sensoriales y fÇürmulas hipoalergÇ¸nicas a precios accesibles.',
    brandStory:
      'Terramar naciÇü para brindar lujo accesible a la mujer latina. Con enfoque en investigaciÇün, ingredientes botÇ­nicos y marinos, y productos libres de crueldad, la marca entrega soluciones de belleza confiables y efectivas.',
  },
  {
    id: 3,
    name: 'Andrea',
    description: 'Moda, calzado y hogar para toda la familia, con compras seguras.',
    image: brandImg03,
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
    image: brandImg04,
    catalogUrl: 'https://ejemplo.com/catalogos/lbel',
    longDescription:
      'Lƒ?TBEL ofrece cuidado de la piel avanzado, maquillaje, fragancias y sets para regalar. Sus catÇ­logos presentan lanzamientos, combinaciones para rutinas completas y beneficios como envÇðos gratis en compras seleccionadas.',
    brandStory:
      'Lƒ?TBEL es una marca de belleza de origen latino con enfoque en calidad y detalle. Su filosofÇða ƒ?oRegala lo excepcionalƒ?? inspira productos refinados, aromas distintivos y experiencias de compra pensadas para sorprender.',
  },
  {
    id: 5,
    name: "Ésika",
    description: 'Cuidado de la piel avanzado, maquillaje y fragancias para regalar y lucir.',
    image: brandImg05,
    catalogUrl: 'https://ejemplo.com/catalogos/lbel',
    longDescription:
      'Lƒ?TBEL ofrece cuidado de la piel avanzado, maquillaje, fragancias y sets para regalar. Sus catÇ­logos presentan lanzamientos, combinaciones para rutinas completas y beneficios como envÇðos gratis en compras seleccionadas.',
    brandStory:
      'Lƒ?TBEL es una marca de belleza de origen latino con enfoque en calidad y detalle. Su filosofÇða ƒ?oRegala lo excepcionalƒ?? inspira productos refinados, aromas distintivos y experiencias de compra pensadas para sorprender.',
  },
  {
    id: 6,
    name: "Cyzone",
    description: 'Cuidado de la piel avanzado, maquillaje y fragancias para regalar y lucir.',
    image: brandImg06,
    catalogUrl: 'https://ejemplo.com/catalogos/lbel',
    longDescription:
      'Lƒ?TBEL ofrece cuidado de la piel avanzado, maquillaje, fragancias y sets para regalar. Sus catÇ­logos presentan lanzamientos, combinaciones para rutinas completas y beneficios como envÇðos gratis en compras seleccionadas.',
    brandStory:
      'Lƒ?TBEL es una marca de belleza de origen latino con enfoque en calidad y detalle. Su filosofÇða ƒ?oRegala lo excepcionalƒ?? inspira productos refinados, aromas distintivos y experiencias de compra pensadas para sorprender.',
  },{
    id: 7,
    name: "Avon",
    description: 'Cuidado de la piel avanzado, maquillaje y fragancias para regalar y lucir.',
    image: brandImg07,
    catalogUrl: 'https://ejemplo.com/catalogos/lbel',
    longDescription:
      'Lƒ?TBEL ofrece cuidado de la piel avanzado, maquillaje, fragancias y sets para regalar. Sus catÇ­logos presentan lanzamientos, combinaciones para rutinas completas y beneficios como envÇðos gratis en compras seleccionadas.',
    brandStory:
      'Lƒ?TBEL es una marca de belleza de origen latino con enfoque en calidad y detalle. Su filosofÇða ƒ?oRegala lo excepcionalƒ?? inspira productos refinados, aromas distintivos y experiencias de compra pensadas para sorprender.',
  },{
    id: 8,
    name: "Ilusión",
    description: 'Cuidado de la piel avanzado, maquillaje y fragancias para regalar y lucir.',
    image: brandImg08,
    catalogUrl: 'https://ejemplo.com/catalogos/lbel',
    longDescription:
      'Lƒ?TBEL ofrece cuidado de la piel avanzado, maquillaje, fragancias y sets para regalar. Sus catÇ­logos presentan lanzamientos, combinaciones para rutinas completas y beneficios como envÇðos gratis en compras seleccionadas.',
    brandStory:
      'Lƒ?TBEL es una marca de belleza de origen latino con enfoque en calidad y detalle. Su filosofÇða ƒ?oRegala lo excepcionalƒ?? inspira productos refinados, aromas distintivos y experiencias de compra pensadas para sorprender.',
  }
];


export const testimonials = [
  { id: 101, author: 'Flea', quote: 'Estos zapatos tienen un look increible y el servicio al cliente fue de primera.', avatar: avatar0, rating: 5 },
  { id: 102, author: 'Carlos Santana', quote: 'La seleccion de productos es celestial. Encontre el estilo que buscaba por anos.', avatar: avatar1, rating: 4.5 },
  { id: 103, author: 'Alicia Keys', quote: 'El maquillaje tiene pigmentacion y acabado espectacular. La entrega fue rapidisima.', avatar: avatar2, rating: 4 },
];

export const products = [
  ...andreaProducts,
  ...naturaProducts,
];

export { naturaProducts, andreaProducts };
