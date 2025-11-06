import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    fileURLToPath(new URL('./assets/css/tailwind.css', import.meta.url)),
    'primeicons/primeicons.css',
  ],
  components: [{ path: '~/components' }],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
  ]
})