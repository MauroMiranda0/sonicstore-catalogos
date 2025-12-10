// client/src/pages/Search/Search.jsx
import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { catalogs, products } from '../../data/mockData';
import '../Catalogs/Catalogs.css';
import './Search.css';

const normalize = (text) => (text || '')
  .toString()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase();

function Search() {
  const [searchParams] = useSearchParams();
  const queryRaw = searchParams.get('q') || '';
  const query = normalize(queryRaw);

  const brandMatches = catalogs.filter((cat) => {
    const haystack = [
      cat.name,
      cat.description,
      cat.longDescription,
      cat.brandStory,
    ]
      .map(normalize)
      .join(' ');
    return query ? haystack.includes(query) : true;
  });

  const productMatches = (products || []).filter((product) => {
    const haystack = [
      product.name,
      product.brand,
    ]
      .map(normalize)
      .join(' ');
    return query ? haystack.includes(query) : true;
  });

  return (
    <div className="search-page container">
      <h1>Resultados de busqueda</h1>
      {query && <p className="search-query">Buscaste: "{queryRaw}"</p>}
      {brandMatches.length === 0 && productMatches.length === 0 ? (
        <p className="search-empty">No encontramos resultados para esta busqueda.</p>
      ) : (
        <>
          <div className="search-block">
            <h2>Marcas</h2>
            {brandMatches.length === 0 ? (
              <p className="search-empty">No hay marcas que coincidan.</p>
            ) : (
              <div className="catalogs-grid">
                {brandMatches.map((catalog) => (
                  <Link to={`/catalogs/${catalog.id}`} key={catalog.id} className="catalog-link">
                    <div className="catalog-card">
                      <div className="card-image-container">
                        <img src={catalog.image} alt={catalog.name} />
                      </div>
                      <div className="card-content">
                        <h3>{catalog.name}</h3>
                        <p>{catalog.description}</p>
                        <div className="card-button">
                          Ver Catalogo
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="search-block">
            <h2>Productos</h2>
            {productMatches.length === 0 ? (
              <p className="search-empty">No hay productos que coincidan.</p>
            ) : (
              <div className="search-products-grid">
                {productMatches.map((product) => (
                  <div className="search-product-card" key={product.id || `${product.brand}-${product.name}`}>
                    <div className="search-product-image">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className="search-product-info">
                      <p className="search-product-name">{product.name}</p>
                      {product.brand && <p className="search-product-brand">{product.brand}</p>}
                      {typeof product.price === 'number' && (
                        <p className="search-product-price">${product.price.toFixed(2)} MXN</p>
                      )}
                      {product.url && (
                        <a
                          href={product.url}
                          target="_blank"
                          rel="noreferrer"
                          className="search-product-link"
                        >
                          Ver detalle
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Search;
