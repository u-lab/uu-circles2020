<template>
  <v-container fluid class="px-6 pb-1">
    <!-- 紹介文 -->
    <v-lazy>
      <intro-content-field />
    </v-lazy>

    <circle-list-field :circles="circles" />

    <v-lazy>
      <div class="d-flex justify-center my-4">
        <div class="intro-background pa-6">
          <p class="mb-0 text-center">
            掲載団体数:
            <span style="font-size: 24px">{{ circles.length }}</span>
          </p>
        </div>
      </div>
    </v-lazy>
  </v-container>
</template>

<script>
const CircleListField = () =>
  import('@/components/organisms/field/CircleListField')
const IntroContentField = () =>
  import('@/components/organisms/field/IntroContentField')

export default {
  components: {
    CircleListField,
    IntroContentField
  },

  fetch({ store }) {
    store.dispatch('fetchCircles')
  },

  computed: {
    circles() {
      return this.$store.getters.circles
    }
  },

  head() {
    return {
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
.index-gacha-intro {
  font-family: fot-klee-pro, sans-serif !important;

  &::before {
    content: '▲';
  }
}
</style>
