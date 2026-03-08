// @ts-check
import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  output: 'hybrid', // Permite páginas estáticas + endpoints API dinámicos
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
})
