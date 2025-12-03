// client/src/pages/Search/Search.jsx
import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { catalogs } from '../../data/mockData';
import '../Catalogs/Catalogs.css';
import './Search.css';

const normalize = (text) => (text || '').toString().toLowerCase();

function Search() {
  const [searchParams] = useSearchParams();
  const queryRaw = searchParams.get('q') || '';
  const query = normalize(queryRaw);

  const results = catalogs.filter((cat) => {
    const haystack = [
      cat.name,
      cat.description,
      cat.longDescription,
      cat.brandStory,
    ]
      .map(normalize)
      .join(' ');
    return haystack.includes(query);
  });

  return (
    <div className="search-page container">
      <h1>Resultados de búsqueda</h1>
      {query && <p className="search-query">Buscaste: "{queryRaw}"</p>}
      {results.length === 0 ? (
        <p className="search-empty">No encontramos resultados para esta búsqueda.</p>
      ) : (
        <div className="catalogs-grid">
          {results.map((catalog) => (
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
  );
}

export default Search;
