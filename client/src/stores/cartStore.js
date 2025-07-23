// client/src/stores/cartStore.js
import { create } from 'zustand';

// Creamos nuestro store con Zustand
const useCartStore = create((set) => ({
  // 1. ESTADO INICIAL
  // 'items' será un array de objetos, donde cada objeto es un producto en el pedido.
  items: [],

  // 2. ACCIONES (las funciones que modifican el estado)

  /**
   * Añade un nuevo producto a la lista de pedido.
   * El producto es un objeto con { name, quantity }.
   * @param {object} product - El producto a añadir.
   */
  addProduct: (product) =>
    set((state) => {
      // Creamos un nuevo array para no mutar el estado original
      const newItems = [...state.items, { ...product, id: Date.now() }]; // Añadimos un ID único
      return { items: newItems };
    }),

  /**
   * Elimina un producto de la lista usando su ID.
   * @param {number} productId - El ID del producto a eliminar.
   */
  removeProduct: (productId) =>
    set((state) => {
      // Filtramos el array, devolviendo todos los items excepto el que coincide con el ID
      const filteredItems = state.items.filter((item) => item.id !== productId);
      return { items: filteredItems };
    }),

  /**
   * Actualiza la cantidad de un producto existente.
   * @param {number} productId - El ID del producto a actualizar.
   * @param {number} quantity - La nueva cantidad.
   */
  updateQuantity: (productId, quantity) =>
    set((state) => {
      // Mapeamos el array para encontrar y actualizar el item correcto
      const updatedItems = state.items.map((item) =>
        item.id === productId ? { ...item, quantity: parseInt(quantity, 10) || 1 } : item
      );
      return { items: updatedItems };
    }),
  
  /**
   * Vacía completamente la lista de pedido.
   */
  clearCart: () => set({ items: [] }),

}));

export default useCartStore;