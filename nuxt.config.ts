import { Configuration } from '@nuxt/types'

export default {
  mode: 'spa',
  head: {
    title: 'Deka',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  loading: {},
  typescript: { typeCheck: { eslint: true } },
  css: [],
  plugins: ['@/plugins/composition-api'],
  build: {},
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    'nuxt-webfontloader',
  ],
  modules: [],
  vuetify: {
    customVariables: ['@/assets/styles/variables.scss'],
    defaultAssets: {
      font: {
        family: 'M PLUS Rounded 1c',
      },
      icons: 'fa',
    },
    theme: {
      dark: true,
    },
    treeShake: true,
  },
  render: {
    static: {
      maxAge: '30d',
    },
  },
} as Configuration
