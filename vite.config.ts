/**
 * Vite Build Configuration
 * 
 * Purpose: Configures the Vite build tool for development and production builds.
 * 
 * Key Settings:
 *   - React plugin: Enables Fast Refresh and JSX transformation
 *   - Base path: "/SK_Digital_Garden/" - Required for GitHub Pages deployment
 *                Must match the repository name exactly
 * 
 * Usage:
 *   - Development: 'npm run dev' (starts dev server with HMR)
 *   - Production: 'npm run build' (creates optimized bundle in dist/)
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/SK_Digital_Garden/", // Ważne: musi się zgadzać z nazwą repo na GitHubie, np. "/szymon-hub/"
})