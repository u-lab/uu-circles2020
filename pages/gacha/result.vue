<template>
  <div class="mb-4">
    <div class="d-flex justify-center px-2 mb-2">
      <v-card>
        <v-img src="/gacha-logo.png" alt="ガチャのロゴ" max-width="300px" />
      </v-card>
    </div>

    <about-heading :num="1"><span class="haifun">結果</span></about-heading>

    <div class="d-flex justify-center">
      <v-container v-if="gachaResult.length === 5">
        <v-row justify="center">
          <v-col v-for="gr in gachaResult" :key="gr.id" cols="6" sm="4" md="2">
            <v-card :to="`/circles/${gr.id}`">
              <v-img :src="gr.image" :alt="`ガチャ結果-${gr.name}`" />

              <div class="d-flex justify-center">
                <about-heading :num="2">
                  <span class="font-gacha-result">
                    {{ gr.shortname || gr.name }}
                  </span>
                </about-heading>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-card
        v-else
        :to="`/circles/${gachaResult[0].id}`"
        class="pa-2"
        max-width="300px"
      >
        <v-img
          :src="gachaResult[0].image"
          :alt="`ガチャ結果-${gachaResult[0].name}`"
        />

        <div class="d-flex justify-center">
          <about-heading :num="2">{{ gachaResult[0].name }}</about-heading>
        </div>
      </v-card>
    </div>

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
import AboutHeading from '@/components/about/AboutHeading'

export default {
  middleware: 'gacha',

  components: {
    AboutHeading
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
