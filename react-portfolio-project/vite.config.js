import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      // lets to use camelCase for all CSS module styles
      localsConvention: "camelCase" ,
    },
  },
});
