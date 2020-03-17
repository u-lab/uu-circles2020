<template>
  <v-row class="background">
    <v-col cols="12">
      <about-heading :num="1">
        協賛企業様一覧
      </about-heading>
    </v-col>

    <v-col cols="12">
      まだありません。現在、協賛企業様を募集しております。
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
      title: '協賛企業様一覧',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            '宇都宮大学の部活動・サークル・学生団体のビラ一覧の協賛企業様一覧です。協賛していただいてありがとうございます。'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: '協賛企業様一覧'
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            '宇都宮大学の部活動・サークル・学生団体のビラ一覧の協賛企業様一覧です。協賛していただいてありがとうございます。-labです。'
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
                  "name": "協賛企業様一覧"
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
