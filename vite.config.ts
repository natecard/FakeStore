import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/FakeStore/',
  plugins: [react()],
  indexHTML: './index.html',
  jsx: 'react',
  rollupInputOptions: {
    input: './src/main.tsx',
  },
});
