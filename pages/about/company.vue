<template>
  <v-row class="background">
    <v-col cols="12">
      <about-heading :num="1" class="about-company-list">
        <span class="haifun">協賛企業・支援者一覧</span>
      </about-heading>

      <div class="d-flex justify-center">
        <div class="intro-background mt-2 pa-4">
          このサイトは協賛してくれている方々によって支えられています。
        </div>
      </div>
    </v-col>

    <v-col cols="12">
      <div>
        <p class="text-center">伊勢元酒店</p>
        <p class="text-center">お米ひろばさとう</p>
        <p class="text-center">Future Rise</p>
        <p class="text-center">
          <small>※五十音順</small>
        </p>
      </div>

      <div class="d-flex justify-center">
        <div style="width: 320px">
          <v-img src="/kyousan.jpg" alt="協賛募集" width="320" />
        </div>
      </div>
    </v-col>

    <v-col cols="12" class="d-flex justify-center">
      <circle-list-btn />
    </v-col>
  </v-row>
</template>

<script>
import AboutHeading from '@/components/about/AboutHeading'
import CircleListBtn from '@/components/util/CircleListBtn'

export default {
  components: {
    AboutHeading,
    CircleListBtn
  },

  head() {
    return {
      title: '協賛企業・支援者一覧',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            '宇都宮大学の部活動・サークル・学生団体のビラ一覧の協賛企業・支援者一覧です。協賛していただいてありがとうございます。'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: '協賛企業・支援者一覧'
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            '宇都宮大学の部活動・サークル・学生団体のビラ一覧の協賛企業・支援者一覧です。協賛していただいてありがとうございます。-labです。'
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
                  "@id": "https://uu-circle20.firebaseapp.com/about/company",
                  "name": "協賛企業・支援者一覧"
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
