import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import cspPlugin from 'vite-plugin-csp'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    cspPlugin({
      policy: {
        'default-src': ['self'],
        'script-src': [
          'self',
          'nonce-{NONCE}',
          'https://www.googletagmanager.com', // Google Analytics
          'https://www.google-analytics.com'
        ],
        'style-src': [
          'self',
          'nonce-{NONCE}',
          'unsafe-inline', // Required for Tailwind CSS
          'https://fonts.googleapis.com' // Google Fonts
        ],
        'img-src': [
          'self',
          'data:',
          'https:', // Allow all HTTPS images (Unsplash, etc.)
          'blob:'
        ],
        'font-src': [
          'self',
          'data:',
          'https://fonts.gstatic.com' // Google Fonts
        ],
        'connect-src': [
          'self',
          'https://www.google-analytics.com', // Google Analytics
          'https://analytics.google.com',
          'https://docs.google.com', // Google Forms/Sheets
          'https://www.googletagmanager.com'
        ],
        'frame-src': [
          'self',
          'https://www.youtube.com', // YouTube embeds
          'https://www.youtube-nocookie.com'
        ],
        'form-action': [
          'self',
          'https://docs.google.com' // Google Forms submission
        ],
        'base-uri': ['self'],
        'frame-ancestors': ['none'], // Prevent clickjacking
        'object-src': ['none'] // No Flash/Java plugins
      },
      onDev: 'full' // Enable full CSP in development mode
    })
  ],
})
