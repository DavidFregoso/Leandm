import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default ({ mode }: { mode: string }) => {
  const isGh = mode === 'gh-pages';
  const base = isGh ? '/Leandm/' : '/';

  return defineConfig({
    plugins: [react()],
    base,
    build: {
      outDir: 'dist'
    },
    server: {
      port: 5173
    }
  });
};
