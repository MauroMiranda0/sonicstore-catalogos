// client/src/data/andreaProducts.js
// Normaliza los datos del catálogo Andrea para consumo en el front.
import andreaRaw from './andrea_zapatos.json';

const toNumber = (value) => {
  const num = Number(value);
  return Number.isNaN(num) ? null : num;
};

const andreaProducts = (andreaRaw || []).map((item, index) => ({
  id: item.id || `AND-${index}`,
  name: item.name || 'Producto Andrea',
  // Marca fija porque este dataset proviene del JSON de Andrea
  brand: 'Andrea',
  price: toNumber(item.price),
  image: item.image || '',
  url: item.url || '',
  catalogId: 3,
}));

export { andreaProducts };
export default andreaProducts;
