export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  router: {
    base: '/covid19-tracker/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Covid-19 Tracker',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'เว็บไซต์รายงานข้อมูลผู้ติดเชื้อ COVID-19 ประจำวัน ข้อมูลประจำประเทศไทย.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-png', href: 'logo.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://google-fonts.nuxtjs.org
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Google Font
  googleFonts: {
    display: "swap",
    families: {
      Prompt: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900]
      }
    }
  },
}
