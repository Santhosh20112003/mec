import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    VitePWA({
      // Use the existing manifest.json file
      manifest: false,
      registerType: 'autoUpdate',
      // Reference to your manifest.json file
      injectManifest: {
        globDirectory: 'public',
        globPatterns: ['**/*.{png,ico,svg}', 'manifest.json'],
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // 10 MB
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp,woff2}'],
      },
      // Include all icon assets referenced in manifest.json
      includeAssets: [
        'android/*.png',
        'ios/*.png',
        'windows11/*.png',
        'favicon.ico',
        'manifest.json'
      ],
      // Point directly to the manifest file
      devOptions: {
        enabled: true,
        navigateFallback: 'index.html',
        type: 'module',
      },
    }),
  ],
})
