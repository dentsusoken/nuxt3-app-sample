// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
    strict: true,
    typeCheck: true
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=500, initial-scale=1',
      title: '🐈 Pretty Cats App',
      meta: [
        { name: 'description', content: '🐈 - This app build by Nuxt 3.' }
      ]
    }
  }
})
