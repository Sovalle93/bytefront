import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            input: '/src/index.jsx',
            external: ['react', 'react-dom', 'react-router-dom','@fontsource/roboto', 'axios'], 
        },
    },
});
