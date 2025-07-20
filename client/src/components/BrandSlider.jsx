// client/src/components/BrandSlider.jsx
import React from 'react';
import './BrandSlider.css';

// 1. Importa todas las imágenes de las marcas
import marca1 from '../assets/brands/marca1.png';
import marca2 from '../assets/brands/marca2.png';
import marca3 from '../assets/brands/marca3.png';
import marca4 from '../assets/brands/marca4.png';
import marca5 from '../assets/brands/marca5.png';
import marca6 from '../assets/brands/marca6.png';
import marca7 from '../assets/brands/marca7.png';
import marca8 from '../assets/brands/marca8.png';
import marca9 from '../assets/brands/marca9.png';

// 2. Crea un array con las imágenes importadas
const brands = [
  marca1, marca2, marca3, marca4, marca5,
  marca6, marca7, marca8, marca9
];

function BrandSlider() {
  // 3. Duplicamos el array para lograr el efecto de scroll infinito sin cortes
  const extendedBrands = [...brands, ...brands];

  return (
    <section className="brands-section">
      <h2 className="section-title">Nuestras Marcas</h2>
      <div className="slider-container">
        <div className="slider-track">
          {extendedBrands.map((brand, index) => (
            <div className="brand-slide" key={index}>
              <img src={brand} alt={`Marca ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandSlider;