// client/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { // <-- AÑADE ESTA SECCIÓN
    proxy: {
      // Si una petición empieza con '/api', la reenvía a nuestro backend
      '/api': {
        target: 'http://localhost:3001', // La URL de nuestro servidor Express
        changeOrigin: true, // Necesario para el proxy
        secure: false, // Útil si tu backend no tiene HTTPS en desarrollo
      },
    },
  },
});