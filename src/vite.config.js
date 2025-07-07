import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.tsx',
            refresh: true,
        }),
        react(),
    ],
    server: {
        host: '0.0.0.0',        // または '0.0.0.0'（Dockerなら）
        port: 5173,
        strictPort: true,
        hmr: {
            host: 'localhost',    // またはクライアントからアクセスするホスト名（DockerならローカルIPやlocalhost以外）
            protocol: 'ws',       // または 'wss'（HTTPS時）
        },
    },
});
