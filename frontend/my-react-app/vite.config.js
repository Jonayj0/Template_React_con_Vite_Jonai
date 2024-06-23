import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})


// -------------------------------------CONFIGURACIÓN AVANZADA PARA PROYECTOS MÁS COMPLEJOS----------------------------//
// --------------------------------------------------------------------------------------------------------------------//
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // Configuración extendida de Vite para una aplicación React
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 5173,
//   },
//   resolve: {
//     alias: {
//       '@': '/src',
//     },
//   },
// });
