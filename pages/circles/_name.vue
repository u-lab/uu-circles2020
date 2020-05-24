<template>
  <circle-name-template
    :circle="circle"
    :circles="circles"
    :before-circle="beforeCircle"
    :next-circle="nextCircle"
  />
</template>

<script>
import { getArrAfter, getArrBefore } from '@/util/array'
const CircleNameTemplate = () =>
  import('@/components/templates/CircleNameTemplate')

export default {
  components: {
    CircleNameTemplate
  },

  fetch({ store }) {
    store.dispatch('fetchCircles')
  },

  data() {
    return {
      count: ''
    }
  },

  computed: {
    beforeCircle() {
      return getArrBefore(this.circles, this.count) // 一つ前のサークル情報取得
    },

    circle() {
      return this.circles[this.count]
    },

    circles() {
      return this.$store.getters.circles
    },

    nextCircle() {
      return getArrAfter(this.circles, this.count) // 一つ後のサークル情報取得
    }
  },

  created() {
    const idx = this.circles.findIndex(
      (circle) => circle.id === this.$route.params.name
    )

    if (idx === -1) {
      return this.$nuxt.error({
        statusCode: 404,
        message: 'Page Not Found'
      })
    }

    this.count = idx
  },

  head() {
    return {
      title: this.circle.name || this.circle.shortname,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.circle.name || this.circle.shortname
        },
        { hid: 'og:type', property: 'og:type', content: 'article' }
      ],
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          innerHTML: `{
            "@context": "http://schema.org",
            "@type": "BreadcrumbList",
            "name": "宇都宮大学の部活動・サークル・学生団体のビラ一覧",
            "url": "https://uu-circle20.firebaseapp.com",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@id": "https://uu-circle20.firebaseapp.com",
                  "name": "ビラ一覧"
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@id": "https://uu-circle20.firebaseapp.com/circle/${this.$route.params.name}",
                  "name": "${this.circle.name}"
                }
              }
            ]
          }`,
          type: 'application/ld+json'
        }
      ]
    }
  }
}
</script>
