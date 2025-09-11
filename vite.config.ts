import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/saas-lead-landing-page/', // 👈 apna GitHub repo name likhna
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
})
