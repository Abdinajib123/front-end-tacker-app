import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // 👇 this must be at the root (not inside resolve)
  server: {
    port: 3000, // if you want to use 3000. Otherwise remove and use 5173.
    proxy: {
      // forward /api -> http://localhost:10000
      '/api': {
        target: 'http://localhost:10000',
        changeOrigin: true,
      },
    },
  },
});
