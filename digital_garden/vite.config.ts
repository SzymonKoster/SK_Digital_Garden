import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/SK_Digital_Garden/", // Ważne: musi się zgadzać z nazwą repo na GitHubie, np. "/szymon-hub/"
})