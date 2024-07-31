import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@generic': path.resolve(__dirname, './src/generic'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@interfaces': path.resolve(__dirname, './src/@interfaces'),
      '@tools': path.resolve(__dirname, './src/tools'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
});
