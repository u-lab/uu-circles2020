import colors from 'vuetify/es5/util/colors'
import AuthorsData from './src/infra/AuthorsData'
import CircleData from './src/infra/CircleData'
import InterviewsData from './src/infra/InterviewsData'
require('dotenv').config()

export default {
  mode: 'spa',

  env: {
    appUrl: process.env.BASE_URL,
    NODE_ENV: process.env.NODE_ENV
  },
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'ja'
    },
    titleTemplate: '%s - ' + '宇都宮大学ビラ一覧',
    title: '宇都宮大学の部活動・サークル・学生団体のビラ一覧',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          '宇都宮大学の部活動・サークル・学生団体のビラ一覧です。ここは宇都宮大学で活動するサークルや学生団体のビラを眺められるサイトです。コロナのせいで入学式が危ぶまれていますが、それでもサークルや学生団体を調べられたらいいなと思い製作しています。在校生一同皆様の入学を心からお祝い申し上げます。'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: '宇都宮大学の部活動・サークル・学生団体のビラ一覧'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '宇都宮大学の部活動・サークル・学生団体のビラ一覧'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '宇都宮大学の部活動・サークル・学生団体のビラ一覧です。ここは宇都宮大学で活動するサークルや学生団体のビラを眺められるサイトです。コロナのせいで入学式が危ぶまれていますが、それでもサークルや学生団体を調べられたらいいなと思い製作しています。在校生一同皆様の入学を心からお祝い申し上げます。'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://uu-circle20.firebaseapp.com/icon.png'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary'
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@U_lab0811'
      },
      {
        name: 'msapplication-TileColor',
        color: '#2b5797'
      },
      {
        name: 'theme-color',
        color: '#ffffff'
      },
      {
        name: 'google-site-verification',
        content: 'dmlG89twr8fNzrWOXm2xBlzl3z8td-Ods3QozpaX89w'
      }
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#1c2122' }
    ],
    script: [{ src: 'https://use.typekit.net/hir7vbf.js', rel: 'preload' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/app.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/vue-youtube.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/google-analytics'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/device',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/sitemap',
    '@nuxtjs/style-resources'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},

  vuetify: {
    customVariables: ['~/assets/scss/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  sitemap: {
    hostname: 'https://uu-circle20.firebaseapp.com',

    routes() {
      const json = CircleData

      // 戻り値の生成
      const urls = []
      for (let i = 0; i < json.length; i++) {
        const url = `circles/${json.id}`
        urls.push(url)
      }

      return urls
    }
  },

  styleResources: {
    scss: ['~/assets/scss/functions/*.scss']
  },

  googleAnalytics: {
    id: 'UA-159871975-1'
  },

  pwa: {
    manifest: {
      name: '宇都宮大学の部活動・サークル・学生団体のビラ一覧',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
      Scope: '/',
      start_url: '/',
      splash_pages: null
    }
  },

  generate: {
    routes() {
      let arr = InterviewsData.map((obj) => {
        return { route: `/interviews/${obj.id}` }
      })

      arr.push({ route: `/interviews` })

      const authorArr = AuthorsData.map((obj) => {
        return { route: `/authors/${obj.id}` }
      })
      arr = [...arr, ...authorArr]

      const circleArr = CircleData.map((obj) => {
        return { route: `/circles/${obj.id}` }
      })
      arr = [...arr, ...circleArr]

      return arr
    }
  },

  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
