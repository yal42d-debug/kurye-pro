import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

// version.txt'den mevcut sürümü oku
const appVersion = fs.readFileSync('./version.txt', 'utf8').trim();

export default defineConfig({
  plugins: [react()],
  define: {
    __APP_VERSION__: JSON.stringify(appVersion)
  },
  base: './',
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  build: {
    outDir: 'www',
    emptyOutDir: true
  }
});
