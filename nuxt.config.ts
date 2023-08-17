// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com',
      siteName: 'Awesome Site',
      siteDescription: 'Welcome to my awesome site!',
      language: 'en', // prefer more explicit language codes like `en-AU` over `en`
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@dargmuesli/nuxt-cookie-control',
    'nuxt3-leaflet',
  ],
  extends: [
    'nuxt-seo-kit'
  ]
})
