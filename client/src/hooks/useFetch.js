// client/src/hooks/useFetch.js
import { useState, useEffect } from 'react';
import { catalogs, testimonials, products } from '../data/mockData';

const resolveEndpoint = (endpoint) => {
  const [basePath, searchParams] = endpoint.split('?');

  if (basePath === '/api/catalogs') {
    return catalogs;
  }

  if (basePath === '/api/testimonials') {
    return testimonials;
  }

  if (basePath === '/api/products') {
    if (searchParams?.includes('featured=true')) {
      return products.filter(product => product.featured);
    }
    return products;
  }

  if (basePath.startsWith('/api/catalogs/')) {
    const id = Number(basePath.replace('/api/catalogs/', ''));
    const catalog = catalogs.find(item => item.id === id);
    if (!catalog) {
      throw new Error('Catalogo no encontrado');
    }
    return catalog;
  }

  if (basePath.startsWith('/api/products/')) {
    const id = basePath.replace('/api/products/', '');
    const product = products.find(item => String(item.id) === id);
    if (!product) {
      throw new Error('Producto no encontrado');
    }
    return product;
  }

  throw new Error(`Endpoint no soportado: ${endpoint}`);
};

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isActive = true;
    setLoading(true);
    setError(null);

    const timer = setTimeout(() => {
      try {
        const responseData = resolveEndpoint(url);
        if (isActive) {
          setData(responseData);
        }
      } catch (err) {
        if (isActive) {
          setError(err);
        }
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    }, 200);

    return () => {
      isActive = false;
      clearTimeout(timer);
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
