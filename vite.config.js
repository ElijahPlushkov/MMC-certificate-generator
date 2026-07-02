import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
    plugins: [viteSingleFile()],

    // Tell Vite where your source files are
    root: '.',

    build: {
        outDir: 'dist',

        // Ensure everything is inlined
        assetsInlineLimit: 100000000, // 100MB - inline all assets

        rollupOptions: {
            input: 'index.html',
        },
    },
});