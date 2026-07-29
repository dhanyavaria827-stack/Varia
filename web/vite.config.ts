import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

export default defineConfig({
  // BASE_PATH is set by CI when deploying to a GitHub Pages project site
  // (served at /<repo>/ instead of the domain root). Once a custom domain
  // is attached, this should go back to unset (root "/").
  base: process.env.BASE_PATH || '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
