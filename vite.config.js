import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // GitHub Pages serves project sites from /repo-name/
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
});
