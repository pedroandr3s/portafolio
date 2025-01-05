import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portafolio/', // Asegúrate de que coincida con el nombre del repositorio
})
