import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace 'spanish-scrabble' with your GitHub repository name if different
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/spanish-scrabble/' : '/',
  build: {
    outDir: 'dist',
  },
});