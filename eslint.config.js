/**
 * ESLint Configuration
 * 
 * Purpose: Defines linting rules for code quality and consistency across the project.
 * 
 * Configuration:
 *   - JavaScript/TypeScript linting with recommended rules
 *   - React Hooks plugin for hook usage validation
 *   - React Refresh plugin for Fast Refresh compatibility
 *   - Ignores the 'dist' directory (build output)
 * 
 * Usage: Run 'npm run lint' to check code quality
 */

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])
