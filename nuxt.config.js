export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  target: 'static',
  
  router: {
    base: '/toksan-anime/'
  },

  head: {
    title: 'Toksan Anime',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Toksan Anime is your #1 source for the newest releases of your favourite manga or anime. Discover new shows or manga for the first time, explore which anime’s are becoming popular or simply relive some of the best moments anime has to offer.' }
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
    '@nuxtjs/google-analytics',
    ['nuxt-fontawesome', {
      component: 'fa', // customize component name
      imports: [{
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['faFireAlt']
      },
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['faBook']
      },
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['faHome']
      },
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['faSearch']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['faFacebookF']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['faInstagram']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['faTwitter']
      }
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

  pwa: {
    icon: {
      fileName: 'app-icon.png'
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  googleFonts: {
    families: {
      Spartan: [300, 400, 500, 600, 700, 800],
      Assistant: [300, 400, 500, 600, 700, 800],

      // Demon Slayer Fonts
      Heebo: [300, 400, 500, 600, 700, 800],
      'Open+Sans': [400, 500, 600, 700, 800],

      // My Hero Fonts
      Coda: [300, 400, 500, 600, 700, 800],
      Lato: [300, 400, 700, 900],
    }
  },

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID
  },

  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID
    }
  },
}
