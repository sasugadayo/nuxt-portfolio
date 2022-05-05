export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-portfolio',
    titleTemplate:  "sasugada's portfolio | %s",
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        name: 'description',
        content: "sasugada's portfolio" || '',
      },

      { hid: 'og:site_name', property: 'og:site_name', content: "sasugada's portfolio" },
      { hid: 'og:type', property: 'og:type', content: "sasugada's portfolio" },
      { hid: 'og:url', property: 'og:url', content: 'https://sasugadayo.netlify.app/' },
      { hid: 'og:title', property: 'og:title', content: "sasugada's portfolio" },
      {
        hid: 'og:description',
        property: 'og:description',
        content: "sasugada's portfolio",
      },
      { hid: 'og:image', property: 'og:image', content: 'https://sasugadayo.netlify.app/' },

      { hid: 'fb:app_id', property: 'fb:app_id', content: 'App-ID' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@Twitter' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['ress', '~/assets/scss/base.scss', '~/assets/scss/global.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@plugins/vee-validate',
    // { src: '@/plugins/vue-chartjs.js', ssr: true },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/date-fns',
  ],

  styleResources: {
    scss: ['~/assets/scss/app.scss'],
    hoistUseStatements: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-webfontloader',
    'nuxt-microcms-module',
    '@nuxtjs/axios',
  ],

  microcms: {
    options: {
      serviceDomain: process.env.SERVICE_DOMAIN,
      apiKey: process.env.GET_API_KEY,
    },
    mode: process.env.NODE_ENV === 'production' ? 'server' : 'all',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      'vee-validate/dist/rules',
      'gsap'
    ]
  },

  webfontloader: {
    google: {
      families: ['Ubuntu:wght@400,700&display=swap'],
    },
  },

}
