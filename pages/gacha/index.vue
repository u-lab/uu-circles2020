<template>
  <div class="mb-4">
    <h1 class="text-center about-heading">サークル・部活ガチャ</h1>

    <div v-once class="d-flex justify-center">
      <div style="max-width: 300px">
        <v-img src="/gacha-with-intro3.png" max-width="300px" alt="ガチャ" />

        <div class="cactus">
          <nuxt-link to="/circles/cactus"><span>協力 Cactus</span></nuxt-link>
        </div>
      </div>
    </div>

    <div v-once class="text-center py-4">
      <v-btn color="#4dbfff" dark @click="gachaDraw()">
        ガチャる
      </v-btn>

      <v-btn color="#70b8d1" dark @click="gachaDraw(5)">
        5連ガチャ
      </v-btn>
    </div>

    <div class="d-flex justify-center mb-2">
      <circle-list-btn />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
const CircleListBtn = () =>
  import('@/components/molecules/buttons/CircleListBtn')

export default {
  components: {
    CircleListBtn
  },

  fetch({ store }) {
    store.dispatch('fetchCircles')
  },

  computed: mapGetters({
    circles: 'circles'
  }),

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

<style lang="scss" scoped>
.cactus {
  text-align: right;
  margin-top: 2px;

  a {
    color: #000;
    text-decoration: none;
  }

  span {
    padding: 2px;

    &::before {
      content: '(';
    }

    &::after {
      content: ')';
    }
  }
}
</style>
