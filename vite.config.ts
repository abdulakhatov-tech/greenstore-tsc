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
      '@type': path.resolve(__dirname, './src/@type'),
      '@tools': path.resolve(__dirname, './src/tools'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@redux': path.resolve(__dirname, './src/redux'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@services': path.resolve(__dirname, './src/services'),
      '@layout': path.resolve(__dirname, './src/layout'),
      '@locale': path.resolve(__dirname, './src/locale'),
    },
  },
});
