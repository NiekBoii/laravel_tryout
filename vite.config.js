import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';
import path from "node:path";
import postcss from "postcss";
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import {PrimeVueResolver} from '@primevue/auto-import-resolver';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        postcss(),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        Components({
            resolvers: [
                PrimeVueResolver()
            ]
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, './resources/js'),
            'ziggy-js': path.resolve('./vendor/tightenco/ziggy/dist/index.esm.js'),
        },
    },
});
