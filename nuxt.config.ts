// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path"
import Lara from '@primevue/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  alias: {
    "@": resolve(__dirname, "/")
  },

  css: ["~/assets/scss/main.scss"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
      '@primevue/nuxt-module'
  ],
  primevue: {
      /* Configuration */
    options: {
      theme: {
          preset: Lara
      }
    }
  }
})
