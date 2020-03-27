<template>
  <div>
    <!-- <div class="d-flex justify-center">
      <div>
        <v-img src="/gacha-with-intro2.png" max-width="300px" alt="ガチャ" />
      </div>
    </div> -->

    <div class="text-center py-4">
      <v-btn color="#4dbfff" dark @click="gachaDraw()">
        ガチャる
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async fetch({ app, store }) {
    await store.dispatch('fetchCircles', {
      fireStore: app.$fireStore,
      fireStorage: app.$fireStorage
    })
  },

  data() {
    return {
      loading: true
    }
  },

  computed: mapGetters({
    circles: 'circles'
  }),

  mounted() {
    this.loading = false
  },

  methods: {
    gachaDraw(times = 1) {
      const circles = this.circles

      // ガチャを引く
      this.$store.dispatch('gacha/gachaDraw', {
        circles,
        times
      })

      // リダイレクト
      this.$router.push('/gacha/movie')
    }
  },

  head() {
    return {
      title: 'サークル・部活ガチャ',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'サークル・部活ガチャ'
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'description',
          name: 'description',
          content:
            'サークル・部活ガチャです。どの団体がいいかお悩みの皆さん！！ガチャを引いて楽しくサークルや部活を選んでみよう！'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'サークル・部活ガチャです。どの団体がいいかお悩みの皆さん！！ガチャを引いて楽しくサークルや部活を選んでみよう！'
        }
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
                  "@id": "https://uu-circle20.firebaseapp.com/gacha",
                  "name": "サークル・部活ガチャ"
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
