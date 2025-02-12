// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['nuxt-quasar-ui', '@pinia/nuxt', '@nuxtjs/i18n', 'pinia-plugin-persistedstate/nuxt'],
  experimental: { appManifest: false },
  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'ru'
  },
  runtimeConfig: {
    public: {
      directus: {
        url: "http://localhost:8055"
      }
    }
  },
  quasar: {
    config: {
      brand: {
        primary: '#26c6da',
        secondary: '#26A69A',
        accent: '#9C27B0',

        dark: '#1d1d1d',
        'dark-page': '#121212',

        positive: '#21BA45',
        negative: '#C10015',
        info: '#31CCEC',
        warning: '#F2C037'
      }
    }
  }
})
