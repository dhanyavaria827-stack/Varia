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
  build: {
    rollupOptions: {
      output: {
        // The default single-file output was one ~520kB bundle covering
        // every page plus every dependency. Splitting rarely-changing
        // vendor code (React, the router, Framer Motion) into its own
        // chunk lets browsers cache it separately from app code that
        // actually changes when a page is edited, and lets the two load
        // in parallel instead of one blocking chunk. This does not touch
        // how any page component loads — no React.lazy()/Suspense here —
        // because scripts/prerender.mjs renders every route synchronously
        // via renderToStaticMarkup, which can't wait for a lazy chunk to
        // resolve; a Suspense fallback would ship as the real page content.
        manualChunks(id) {
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/') || id.includes('node_modules/react-router')) {
            return 'vendor'
          }
          if (id.includes('node_modules/framer-motion')) {
            return 'motion'
          }
        },
      },
    },
  },
})
