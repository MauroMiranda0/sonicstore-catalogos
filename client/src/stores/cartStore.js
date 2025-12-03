// client/src/stores/cartStore.js
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// Store de carrito con Zustand persistido en localStorage
const useCartStore = create(
  persist(
    (set) => ({
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
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCartStore;
