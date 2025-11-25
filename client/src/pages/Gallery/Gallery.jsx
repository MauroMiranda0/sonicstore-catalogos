// client/src/pages/Gallery/Gallery.jsx
import React, { useState } from 'react';

// 1. Importaciones para el Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import './Gallery.css';
import useCartStore from '../../stores/cartStore';
import { FaCheckCircle } from 'react-icons/fa';

// Importa tus imagenes
import img1 from '../../assets/gallery/gallery1.jpg';
import img2 from '../../assets/gallery/gallery2.jpg';
import img3 from '../../assets/gallery/gallery3.jpg';
import img4 from '../../assets/gallery/gallery4.jpg';
import img5 from '../../assets/gallery/gallery5.jpg';
import img6 from '../../assets/gallery/gallery6.jpg';
import img7 from '../../assets/gallery/gallery7.jpg';
import img8 from '../../assets/gallery/gallery8.jpg';
import img9 from '../../assets/gallery/gallery9.jpg';

const images = [
  { src: img1, alt: 'Imagen de galeria 1', title: 'Look urbano relajado', price: '$89', sku: 'SKU-1001', description: 'Sudadera ligera y denim clasico listos para el dia a dia.', features: ['Algodon suave', 'Jeans stretch', 'Capucha forrada'] },
  { src: img2, alt: 'Imagen de galeria 2', title: 'Athleisure neutro', price: '$75', sku: 'SKU-1002', description: 'Mezcla deportiva en tonos tierra para transiciones rapidas.', features: ['Tenis transpirables', 'Joggers con ajuste', 'Secado rapido'] },
  { src: img3, alt: 'Imagen de galeria 3', title: 'Denim con capas', price: '$98', sku: 'SKU-1003', description: 'Camisa utilitaria sobre basicos, ideal para media estacion.', features: ['Corte relajado', 'Bolsillos funcionales', 'Tela resistente'] },
  { src: img4, alt: 'Imagen de galeria 4', title: 'Basicos monocromos', price: '$65', sku: 'SKU-1004', description: 'Playera y pantalon monocromo listos para combinar.', features: ['Algodon organico', 'Costuras reforzadas', 'Ajuste regular'] },
  { src: img5, alt: 'Imagen de galeria 5', title: 'Oficina moderna', price: '$120', sku: 'SKU-1005', description: 'Blazer estructurado con pantalon slim para juntas clave.', features: ['Forro suave', 'Botonadura clasica', 'Tiro medio'] },
  { src: img6, alt: 'Imagen de galeria 6', title: 'Weekend minimal', price: '$72', sku: 'SKU-1006', description: 'Conjunto liviano perfecto para escapadas de fin de semana.', features: ['Tejido fresco', 'Sneakers livianos', 'Tono versatil'] },
  { src: img7, alt: 'Imagen de galeria 7', title: 'Elegancia casual', price: '$110', sku: 'SKU-1007', description: 'Vestido camisero con accesorios metalicos sutiles.', features: ['Ajuste fluido', 'Cinturon incluido', 'Botones nacarados'] },
  { src: img8, alt: 'Imagen de galeria 8', title: 'Color block suave', price: '$95', sku: 'SKU-1008', description: 'Combinacion pastel para dias soleados y ligeros.', features: ['Tela respirable', 'Costuras planas', 'Corte relajado'] },
  { src: img9, alt: 'Imagen de galeria 9', title: 'Street chic', price: '$130', sku: 'SKU-1009', description: 'Abrigo ligero con acentos negros y base neutra.', features: ['Capucha desmontable', 'Bolsillos con zipper', 'Repelente al agua'] },
];

function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState('');
  const addProduct = useCartStore((state) => state.addProduct);

  const handleSelect = (i) => {
    setIndex(i);
    setOpen(true);
    setFeedback('');
  };

  const handleAddToCart = (slide) => {
    if (!slide) return;
    addProduct({
      name: slide.title || slide.alt,
      sku: slide.sku,
      price: slide.price,
      quantity: 1,
      image: slide.src,
    });
    setFeedback(`${slide.title || 'Producto'} agregado a la bolsa`);
  };

  return (
    <div className="gallery-page">
      <header className="page-header-alt">
        <div className="container">
          <h1>Galeria de Estilos</h1>
          <p className="page-subtitle">Inspirate con nuestra comunidad y descubre como combinar nuestros productos.</p>
        </div>
      </header>

      <section className="gallery-section">
        <div className="container">
          <div className="image-grid">
            {images.map((image, i) => (
              <div
                className="grid-item"
                key={i}
                onClick={() => handleSelect(i)}
              >
                <img src={image.src} alt={image.alt} />
                <div className="image-overlay">Ver</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Componente Lightbox */}
      <Lightbox
        open={open}
        close={() => {
          setOpen(false);
          setFeedback('');
        }}
        slides={images}
        index={index}
        render={{
          slide: ({ slide }) => (
            <div className="lightbox-frame">
              <img src={slide.src} alt={slide.alt} className="lightbox-image" />
              <div className="lightbox-overlay">
                <div className="lightbox-meta">
                  <div>
                    <h3>{slide.title}</h3>
                    {slide.sku && <p className="lightbox-sku">SKU: {slide.sku}</p>}
                  </div>
                </div>

                {slide.description && (
                  <p className="lightbox-description">{slide.description}</p>
                )}

                <ul className="lightbox-features">
                  {slide.features?.map((feature) => (
                    <li key={feature}>
                      <FaCheckCircle className="feature-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="lightbox-add-btn" onClick={() => handleAddToCart(slide)}>
                  Agregar a la bolsa
                </button>
                {feedback && <div className="lightbox-feedback">{feedback}</div>}
              </div>
            </div>
          )
        }}
      />
    </div>
  );
}

export default Gallery;
