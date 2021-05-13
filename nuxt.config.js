const env = require('dotenv').config()

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  target: 'static',
  router: {
    base: '/toksan-anime/'
  },

  env: env.parsed,
  
  head: {
    title: 'toksan-anime',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/reset.css',
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/mixinCommonMethods'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/google-fonts',
    ['nuxt-fontawesome', {
      component: 'fa', //customize component name
      imports: [{
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faFireAlt']
          },
          {set: '@fortawesome/free-solid-svg-icons',
          icons: ['faBook']
          },
          {set: '@fortawesome/free-solid-svg-icons',
          icons: ['faHome']
          },
          {set: '@fortawesome/free-solid-svg-icons',
          icons: ['faSearch']
          },
          {set: '@fortawesome/free-brands-svg-icons',
          icons: ['faFacebookF']
          },
          {set: '@fortawesome/free-brands-svg-icons',
          icons: ['faInstagram']
          },
          {set: '@fortawesome/free-brands-svg-icons',
          icons: ['faTwitter']
          },
      ]
   }]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  googleFonts: {
    families: {
      Heebo: [300, 400, 500, 600, 700, 800],
      Spartan: [300, 400, 500, 600, 700, 800],
      Assistant: [300, 400, 500, 600, 700, 800],
      'Open+Sans': [400, 500, 600, 700, 800]
    }
  },
}
