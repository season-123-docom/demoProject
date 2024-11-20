import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  //倉庫路徑(手寫)
 base:process.env.NODE_ENV ==='production' ? '/demoProject/':'/',
  plugins: [react()],
})
