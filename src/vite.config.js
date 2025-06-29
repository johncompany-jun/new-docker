import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
    server: {
        port: 5173,
        strictPort: true,
        host: true,
        hmr: {
            host: 'localhost',
        },
        watch: {
            usePolling: true, // CPU 負荷の高いファイル監視を最適化
            interval: 1000, // 監視間隔を1秒に設定
        },
    },
    optimizeDeps: {
        include: ['react', 'react-dom'], // 事前バンドルしてメモリ消費を軽減
    },
});
