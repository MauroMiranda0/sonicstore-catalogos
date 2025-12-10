// client/src/data/naturaProducts.js
// Normaliza los datos de Natura desde el JSON para usarlos en el front.
import naturaRaw from './natura.json';

const pickValue = (item, predicate) => {
  const key = Object.keys(item || {}).find((k) => predicate(k));
  return key ? item[key] : undefined;
};

const normalizeNumber = (value) => {
  if (value === undefined || value === null || value === '') return null;
  const cleaned = String(value).replace(/[^\d.-]/g, '');
  const num = Number(cleaned);
  return Number.isNaN(num) ? null : num;
};

const naturaProducts = (naturaRaw || []).map((item, index) => {
  const name = pickValue(item, (key) => key.toLowerCase().includes('nombre')) || 'Producto Natura';
  // Marca fija porque este dataset proviene del JSON de Natura
  const brand = 'Natura';
  const price = normalizeNumber(pickValue(item, (key) => key.toLowerCase().includes('precio')));
  const rating = normalizeNumber(pickValue(item, (key) => key.toLowerCase().includes('calific')));
  const image = pickValue(item, (key) => key.toLowerCase().includes('imagen')) || '';
  const url = pickValue(item, (key) => key.toLowerCase().includes('url')) || '';

  const codeFromUrl = url?.split('/').find((segment) => segment.includes('-')) || `NAT-${index}`;

  return {
    id: codeFromUrl.split('?')[0] || `NAT-${index}`,
    name,
    brand,
    price,
    rating,
    image,
    url,
    catalogId: 1,
  };
});

export { naturaProducts };
export default naturaProducts;
