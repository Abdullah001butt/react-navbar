import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify the output directory for the build
    // You can add more build options here
  },
  server: {
    port: 3000, // Specify the port for the development server
    // You can add more development server options here
  }
})
