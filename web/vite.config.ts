import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  // BASE_PATH is set by CI when deploying to a GitHub Pages project site
  // (served at /<repo>/ instead of the domain root). Once a custom domain
  // is attached, this should go back to unset (root "/").
  base: process.env.BASE_PATH || '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // This config is ESM, where __dirname is not defined. It happens to
      // work today because Vite bundles the config first, but deriving the
      // directory from import.meta.url is what actually holds in ESM — and
      // unlike import.meta.dirname it needs no minimum Node version, which
      // matters since CI pins node-version: 20.
      '@': path.resolve(path.dirname(fileURLToPath(import.meta.url)), './src'),
    },
  },
})
