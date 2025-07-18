// client/src/hooks/useFetch.js
import { useState, useEffect } from 'react';

function useFetch(url) {
  // Aquí movemos toda la lógica de estado que se repetía
  const [data, setData] = useState(null); // Empezamos con null, es más semántico
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Usamos una función abortController para limpiar el efecto si el componente se desmonta
    // Esto previene errores de "state update on an unmounted component"
    const abortController = new AbortController();

    // Reiniciamos los estados al empezar una nueva petición (útil si la URL cambia)
    setLoading(true);
    setError(null);

    fetch(url, { signal: abortController.signal })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setData(data);
      })
      .catch(error => {
        if (error.name === 'AbortError') {
          console.log('Fetch abortado');
        } else {
          setError(error);
        }
      })
      .finally(() => {
        // finally() se ejecuta siempre, ya sea éxito o error. Perfecto para el loading.
        setLoading(false);
      });

    // Función de limpieza del useEffect
    // Se ejecuta cuando el componente se desmonta o antes de que el efecto se re-ejecute
    return () => abortController.abort();

  }, [url]); // El efecto se re-ejecutará si la URL cambia

  // El hook devuelve el estado actual para que el componente lo pueda usar
  return { data, loading, error };
}

export default useFetch;