export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon'],
  icon: {
    provider: 'server', // or 'client' for client-side rendering
    collections: ['mdi'] 
  }
})