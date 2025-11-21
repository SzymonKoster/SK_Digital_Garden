/**
 * React Application Entry Point
 * 
 * Purpose: Bootstraps the React application and mounts it to the DOM.
 * 
 * What it does:
 *   1. Imports React's StrictMode for development warnings
 *   2. Finds the root element in index.html (id="root")
 *   3. Renders the main App component inside StrictMode
 * 
 * StrictMode: Helps identify potential problems in the application during development
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
