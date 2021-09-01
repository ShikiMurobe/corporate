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
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
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
  ],

  webfontloader: {
    google: {
      families: ['Lato:400,700', 'Noto+Sans+JP:400,700', 'Kaushan+Script'] 
    }
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
