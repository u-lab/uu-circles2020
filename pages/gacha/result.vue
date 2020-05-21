<template>
  <div class="mb-4">
    <v-row justify="center" class="pt-2 mb-2">
      <v-card>
        <v-img src="/gacha-logo.png" alt="ガチャのロゴ" max-width="300px" />
      </v-card>
    </v-row>

    <about-heading :num="1"><span class="haifun">結果</span></about-heading>

    <gacha-result-five-template
      v-if="gachaResult.length === 5"
      :circles="gachaResult"
    />

    <gacha-result-one-template v-else :circle="gachaResult[0]" />

    <div class="text-center py-4">
      <v-btn color="#4dbfff" dark to="/gacha">
        もう一度回す
      </v-btn>
    </div>

    <div class="d-flex justify-center mb-2">
      <v-btn to="/" nuxt color="#0b2157" dark>
        <v-icon small>mdi-format-align-justify</v-icon>
        <span class="ml-2">一覧を見る</span>
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
const AboutHeading = () => import('@/components/atoms/heading/AboutHeading')
const GachaResultOneTemplate = () =>
  import('@/components/templates/GachaResultOneTemplate')
const GachaResultFiveTemplate = () =>
  import('@/components/templates/GachaResultFiveTemplate')

export default {
  middleware: 'gacha',

  components: {
    AboutHeading,
    GachaResultOneTemplate,
    GachaResultFiveTemplate
  },

  computed: {
    ...mapGetters({
      gachaResult: 'gacha/circles'
    })
  },

  head() {
    return {
      title: 'ガチャ結果',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'ガチャ結果'
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
                  "@id": "https://uu-circle20.firebaseapp.com/gacha/result",
                  "name": "ガチャ結果"
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
