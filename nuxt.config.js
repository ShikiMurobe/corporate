const Sass = require('sass')
const Fiber = require('fibers')

export default {
  ssr: false,
  target: 'static',
  router: {
    base: '/corporate/'
  },

  head: {
    title: 'Shikibu\'s Corporate Site',
    titleTemplate: '%s | Shikibu\'s Corporate Site',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'This site is the Corporate of Shikibu -Fullstack Engineer-' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Shikibu\'s Corporate Site' },
      { hid: 'og:url', property: 'og:url', content: 'https://shikimurobe.github.io/corporate/' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary' },
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.15.4/css/all.css",
        integrity: "sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm",
        crossorigin: "anonymous",
      },
    ]
  },

  css: [
    "~assets/scss/main.scss"
  ],

  plugins: [
    { src: "~/plugins/localStorage.js", ssr: false }
  ],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    'nuxt-webfontloader',
    '@nuxtjs/google-gtag',
    '@nuxtjs/sitemap',
  ],

  webfontloader: {
    google: {
      families: ['Lato:400,700', 'Noto+Sans+JP:400,700', 'Kaushan+Script'] 
    }
  },
  'google-gtag': {
    id: 'UA-188035734-1', 
    debug: false, 
  },
  sitemap: {
    hostname: 'https://shikimurobe.github.io/corporate',
    routes: [
      "/about/",
      "/skill/",
      "/service/",
    ],
  },
  build: {
    loaders: {
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber
        }
      }
    },
  }
}
