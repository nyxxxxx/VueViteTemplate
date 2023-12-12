import { fileURLToPath , URL } from 'url'
import { defineConfig } from 'vite'
import VueDevTools from 'vite-plugin-vue-devtools'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueDevTools(),
    vue()
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
