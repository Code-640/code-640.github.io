import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss({
      config: {
        content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,html}'],
        theme: {
          extend: {
            colors: {
              brand: {
                50: 'var(--color-brand-50)',
                100: 'var(--color-brand-100)',
                200: 'var(--color-brand-200)',
                300: 'var(--color-brand-300)',
                400: 'var(--color-brand-400)',
                500: 'var(--color-brand-500)',
                600: 'var(--color-brand-600)',
                700: 'var(--color-brand-700)',
                800: 'var(--color-brand-800)',
                900: 'var(--color-brand-900)',
              },
            },
          },
        },
      }
    })
  ],
  build: { // to output your build into build dir the same as Webpack
    outDir: 'build',
  },
  server: {
    open: true,
    port: 3000,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
});