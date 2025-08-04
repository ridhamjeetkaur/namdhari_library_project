import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://namdhari-library-project.onrender.com', // Your Express server port
        changeOrigin: true
      }
    }
  },
  build: {
    outDir: 'dist'
  }
})