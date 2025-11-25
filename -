// client/src/pages/Gallery/Gallery.jsx
import React, { useState } from 'react';

// 1. Importaciones para el Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import './Gallery.css';

// Importa tus imágenes
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
  { src: img1, alt: 'Imagen de galería 1' },
  { src: img2, alt: 'Imagen de galería 2' },
  { src: img3, alt: 'Imagen de galería 3' },
  { src: img4, alt: 'Imagen de galería 4' },
  { src: img5, alt: 'Imagen de galería 5' },
  { src: img6, alt: 'Imagen de galería 6' },
  { src: img7, alt: 'Imagen de galería 7' },
  { src: img8, alt: 'Imagen de galería 8' },
  { src: img9, alt: 'Imagen de galería 9' },
];

function Gallery() {
  // 2. Estado para manejar el lightbox
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="gallery-page">
      <header className="page-header-alt">
        <div className="container">
          <h1>Galería de Estilos</h1>
          <p className="page-subtitle">Inspírate con nuestra comunidad y descubre cómo combinar nuestros productos.</p>
        </div>
      </header>

      <section className="gallery-section">
        <div className="container">
          <div className="image-grid">
            {images.map((image, i) => (
              <div 
                className="grid-item" 
                key={i} 
                onClick={() => {
                  setIndex(i); // Establece la imagen en la que se hizo clic
                  setOpen(true); // Abre el lightbox
                }}
              >
                <img src={image.src} alt={image.alt} />
                <div className="image-overlay">Ver</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Componente Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images}
        index={index}
      />
    </div>
  );
}

export default Gallery;