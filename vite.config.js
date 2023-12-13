import { fileURLToPath , URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// plugins
import VueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueDevTools(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        {
          'axios': [
            ['default', 'axios'], // import { default as axios } from 'axios',
          ],
        },
      ],
      // Auto import for module exports under directories (如JS)
      dirs: ['./src/assets/js'],
      dts: false,
      vueTemplate: true,
    }),
    Components({
      dirs: ['./src/components'],
      extensions: ['vue'],
      deep: true,
      dts: false,
      resolvers: [
        PrimeVueResolver(),
      ],
    }),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@css', replacement: fileURLToPath(new URL('./src/assets/css', import.meta.url)), },
      { find: '@js', replacement: fileURLToPath(new URL('./src/assets/js', import.meta.url)) },
      { find: '@img', replacement: fileURLToPath(new URL('./src/assets/img', import.meta.url)) },
      { find: '@plugin', replacement: fileURLToPath(new URL('./src/assets/plugin', import.meta.url)) },
    ],
  },
  server: {
    host: true,
    port: 5432,
  }
})
