// client/src/stores/cartStore.js
import { create } from 'zustand';

// Store de carrito con Zustand
const useCartStore = create((set) => ({
  items: [],

  addProduct: (product) =>
    set((state) => ({
      items: [
        ...state.items,
        {
          ...product,
          id: Date.now(),
          catalog: product.catalog || product.catalogName || product.brand || 'Catálogo general',
        },
      ],
    })),

  removeProduct: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
    })),

  updateQuantity: (productId, quantity) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === productId ? { ...item, quantity: parseInt(quantity, 10) || 1 } : item
      ),
    })),

  clearCart: () => set({ items: [] }),
}));

export default useCartStore;
