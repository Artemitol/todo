import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@scss': resolve(__dirname, 'src/shared/scss-properties'),
    },
  },  
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
              @import "@scss/_mixins.scss";
              @import "@scss/_media.scss";
            `,
      },
    },
  },
})
