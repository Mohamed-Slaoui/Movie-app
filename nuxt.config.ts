// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // server: {
  //   port: 8000, // default: 3000
  //   host: '0.0.0.0' // default: localhost
  // },
  modules: [
    'nuxt-icon',
    
  ],
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
