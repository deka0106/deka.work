import { Configuration } from '@nuxt/types'

const config: Configuration = {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Deka',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {},

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    'nuxt-webfontloader'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [],

  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/styles/variables.scss'],
    defaultAssets: {
      font: {
        family: 'M PLUS Rounded 1c'
      },
      icons: 'fa'
    },
    theme: {
      dark: true
    },
    treeShake: true
  },

  /*
   ** Build configuration
   */
  build: {}
}

export default config
