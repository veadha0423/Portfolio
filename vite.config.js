import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Option A: If your repo is named "portfolio", use '/portfolio/'
  // Option B: To work with any repo name automatically, use './' (relative path)
  base: './',
})
