<template>
  <v-container fluid class="px-6 pb-1">
    <!-- 紹介文 -->
    <v-lazy>
      <intro-content-field />
    </v-lazy>

    <circle-list-field :circles="circles" />

    <circle-length-field :length="circles.length" />
  </v-container>
</template>

<script>
const CircleListField = () =>
  import('@/components/organisms/field/CircleListField')
const CircleLengthField = () =>
  import('@/components/organisms/field/CircleLengthField')
const IntroContentField = () =>
  import('@/components/organisms/field/IntroContentField')

export default {
  components: {
    CircleListField,
    CircleLengthField,
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
