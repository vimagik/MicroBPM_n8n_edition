// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['nuxt-quasar-ui', '@pinia/nuxt', '@nuxtjs/i18n', '@nuxtjs/i18n'],
  experimental: { appManifest: false },
  i18n: {
   defaultLocale: 'ru', // default locale of your project for Nuxt pages and routings
  }
})

// modules: ['nuxt-directus', 'nuxt-quasar-ui', '@pinia/nuxt'],