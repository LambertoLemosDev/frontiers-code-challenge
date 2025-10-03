import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [vue()],
    server: {
      proxy: {
        '/api/quotes/random': {
          target: env.VITE_QUOTES_RANDOM_ENDPOINT,
          changeOrigin: true,
          secure: false,
          rewrite: () => '',
        },
      },
    },
    resolve: {
      alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
    }
  }
})
