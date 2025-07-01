// vite.config.js
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/build/', // ← 重要！URL解決の基準
  plugins: [
    laravel({
      input: 'resources/js/app.jsx',
      refresh: false, // 本番では不要
    }),
    react(),
  ],
  build: {
    manifest: true,
    outDir: 'public/build',
    rollupOptions: {
      input: 'resources/js/app.jsx',
    },
  },
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    hmr: {
      host: 'localhost',
    },
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});

