// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['nuxt-quasar-ui', '@pinia/nuxt'],
  experimental: { appManifest: false },
})

// modules: ['nuxt-directus', 'nuxt-quasar-ui', '@pinia/nuxt'],