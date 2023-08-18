import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unfonts from 'unplugin-fonts/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unfonts({
      custom: {
        display: 'swap',
        families: {
          Poppins: {
            src: './src/assets/fonts/Poppins*',
            transform(font) {
              if (font.basename === 'Poppins-Bold') {
                font.weight = 700
              }
              return font
            }
          }
        },
        prefetch: false,
        preload: true,
        injectTo: 'head-prepend'
      }
    })
  ]
})
