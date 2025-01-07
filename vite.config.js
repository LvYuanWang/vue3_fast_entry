import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    proxy: {
      // '/reply': {
      //   target: 'https://api.mlyai.com',  // 代理地址
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/reply/, '') // 将 /api 重写为空
      // }
      '/reply': 'https://api.mlyai.com'
    }
  }
})
