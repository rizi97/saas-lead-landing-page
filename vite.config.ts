import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: 'hyprlynxcapital.com', // 👈 apna GitHub repo name likhna
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
})
