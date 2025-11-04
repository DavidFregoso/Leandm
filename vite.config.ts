import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'gh-pages' ? '/Leandm/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
}));
