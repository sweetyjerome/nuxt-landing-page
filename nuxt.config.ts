// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4
  },
css: ['~/assets/scss/main.scss']
})