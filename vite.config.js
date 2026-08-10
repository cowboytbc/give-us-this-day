import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  publicDir: 'ART',
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        links: resolve(import.meta.dirname, 'links/index.html'),
        booking: resolve(import.meta.dirname, 'booking/index.html'),
      },
    },
  },
})
