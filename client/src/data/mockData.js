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
      'Natura es la marca sustentable número uno del mundo, fundada en 1969. Combina innovaciÇün, ingredientes de origen vegetal y un compromiso profundo con el medio ambiente para ofrecer belleza responsable y de alta calidad.',
  },
  {
    id: 2,
    name: 'Terramar',
    description: 'Ciencia y naturaleza en fórmulas premium para la mujer latina.',
    image: brandImg02,
    catalogUrl: 'https://ejemplo.com/catalogos/terramar',
    longDescription:
      'Terramar Brands une ciencia y naturaleza con ingredientes premium de la tierra y el mar: ADN marino, células madre de algas, caviar y oro. Sus líneas capilar, facial y de maquillaje ofrecen resultados visibles, texturas sensoriales y fórmulas hipoalergénicas a precios accesibles.',
    brandStory:
      'Terramar nació para brindar lujo accesible a la mujer latina. Con enfoque en investigaciÇün, ingredientes botánicos y marinos, y productos libres de crueldad, la marca entrega soluciones de belleza confiables y efectivas.',
  },
  {
    id: 3,
    name: 'Andrea',
    description: 'Moda, calzado y hogar para toda la familia, con compras seguras.',
    image: brandImg03,
    catalogUrl: 'https://ejemplo.com/catalogos/andrea',
    longDescription:
      'Andrea es un universo de moda y hogar para toda la familia: calzado, ropa, accesorios, belleza, electrónica y línea Home para renovar cada espacio. Sus catálogos por temporada incluyen tendencias, outlet y beneficios como compras seguras y programas de recompensas.',
    brandStory:
      'Andrea se ha consolidado como un referente de estilo integral en México. Con colecciones para mujer, hombre, niños y hogar, la marca combina variedad, seguridad en compras y promociones pensadas para sus clientes.',
  },
  {
    id: 4,
    name: "L'BEL",
    description: 'Cuidado de la piel avanzado, maquillaje y fragancias para regalar y lucir.',
    image: brandImg04,
    catalogUrl: 'https://ejemplo.com/catalogos/lbel',
    longDescription:
      'L´BEL ofrece cuidado de la piel avanzado, maquillaje, fragancias y sets para regalar. Sus catálogos presentan lanzamientos, combinaciones para rutinas completas.',
    brandStory:
      'L´BEL es una marca de belleza de origen latino con enfoque en calidad y detalle. Su filosofía ¡Regala lo excepcional! inspira productos refinados, aromas distintivos y experiencias de compra pensadas para sorprender.',
  },
  {
    id: 5,
    name: "Ésika",
    description: 'Marca que ofrece "todo lo que necesitas para crear tu look", abarcando diversas categorías de belleza.',
    image: brandImg05,
    catalogUrl: 'https://ejemplo.com/catalogos/esika',
    longDescription: 'Ésika presenta un catálogo que incluye maquillaje, perfumes, skincare, cuidado personal y joyería. Destaca su línea de maquillaje COLORFIX, descrita como "¡a prueba de todo!", con fórmulas que contienen aceite de argán y manteca de karité, ofreciendo hasta 36 horas de duración.',
    brandStory: 'La marca dirige sus productos, específicamente aquellos de larga duración y resistencia, a lo que denomina "mujeres imparables".'
  },
  {
    id: 6,
    name: "Cyzone",
    description: 'Marca que promete "todo lo que necesitas para crear tu look" con una propuesta de "¡PRODUCTOS WOW A PRECIOS WOW!".',
    image: brandImg06,
    catalogUrl: 'https://ejemplo.com/catalogos/cyzone',
    longDescription: 'Ofrece una variedad de productos organizados en categorías como maquillaje, perfumes, skincare, cuidado personal, y moda y accesorios. Además, promueve descuentos exclusivos por tiempo limitado.',
    brandStory: 'La marca dirige sus productos, específicamente aquellos de larga duración y resistencia, a lo que denomina "mujeres imparables".'
  },
  {
    id: 7,
    name: "Avon",
    description: 'Marca que ofrece categorías como maquillaje, rostro, cuerpo, perfumería, cabello y "casa y estilo", bajo lemas como "Avon, Mira de nuevo".',
    image: brandImg07,
    catalogUrl: 'https://ejemplo.com/catalogos/avon',
    longDescription: 'Avon presenta un portafolio diverso que incluye la línea de maquillaje Power Stay (labiales y delineadores de larga duración), cuidado de la piel con marcas como Anew y Avon Care. También destaca su amplia oferta de fragancias para ella y él (Imari, Far Away, Sensus, Wild Country) y productos de Clearskin para exfoliación. Ofrecen descuentos mediante cupones y su aplicación móvil.',
    brandStory: 'La compañía se define con conceptos como "Grandiosa Mujer" y su visión "Avon, Mira de nuevo". Su identidad corporativa está fuertemente ligada a causas sociales.'
  },
  {
    id: 8,
    name: "Ilusión",
    description: 'Empresa 100% mexicana que va más allá de la lencería, ofreciendo moda, calzado, belleza y fragancias, y se define como una comunidad que empodera a las mujeres latinas.',
    image: brandImg08,
    catalogUrl: 'https://ejemplo.com/catalogos/lbel',
    longDescription: 'Ilusión ofrece una amplia gama de productos que incluye lencería (bras, panties, babydolls), ropa exterior (jeans, blusas, abrigos), ropa deportiva, pijamas, calzado, belleza, joyería y fragancias. Además de su marca propia, comercializan marcas de terceros como Maybelline, L\'Oreal, Renova, Skechers y Flexi. Su catálogo abarca categorías para damas, caballeros, infantil y juvenil.',
    brandStory: 'Fundada en 1949, Ilusión comenzó como una empresa mexicana dedicada al mundo de la mujer y ha evolucionado por más de 70 años. Se consideran una comunidad que celebra la diversidad, apoya la feminidad y busca ser un aliado de confianza en cada capítulo de la vida de la mujer.'
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
