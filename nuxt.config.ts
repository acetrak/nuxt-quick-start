// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/devtools',
    '@nuxt/image-edge',
  ],
  pinia: {
    autoImports: [
      'defineStore',
    ],
  },
  // @ts-ignore
  srcDir: 'src/',
  // @ts-ignore
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/variable.scss" as *;'
        }
      }
    }
  },
  runtimeConfig: {}
})
