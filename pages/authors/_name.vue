<template>
  <v-container>
    <div class="px-4">
      <v-row class="mb-4" align="center">
        <v-col cols="6" class="d-flex justify-center">
          <v-avatar size="150px">
            <v-img :src="author.image" />
          </v-avatar>
        </v-col>
        <v-col cols="6">
          <div class="text-center">
            <h1 class="main-title" v-text="author.name" />
            <p class="mb-0" v-text="author.job" />
          </div>
        </v-col>
      </v-row>

      <div class="mb-4">
        <h2 class="description">新入生に向けて一言</h2>
        <div class="radius pa-2" style="border: 1px solid #000">
          <p
            v-for="(description, key) in author.description"
            :key="key"
            v-text="description"
          />
        </div>
      </div>

      <div class="d-flex justify-center">
        <navy-blue-button to="/interviews" large>
          記事一覧へ
        </navy-blue-button>
      </div>
    </div>
  </v-container>
</template>

<script>
import {
  getAuthors,
  findAuthorById
} from '@/src/domains/services/AuthorService'
const NavyBlueButton = () => import('@/components/atoms/buttons/NavyBlueButton')

export default {
  components: {
    NavyBlueButton
  },

  asyncData({ params }) {
    const author = findAuthorById(getAuthors(), params.name)
    return {
      author
    }
  },

  head() {
    return {
      title: this.author.name,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.author.name
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
                  "@id": "https://uu-circle20.firebaseapp.com/authors/${this.$route.params.name}",
                  "name": "${this.author.name}"
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
.description {
  font-size: 20px;

  @include mq(sm) {
    font-size: 24px;
  }
}

.main-title {
  font-size: 1.75rem;

  @include mq(sm) {
    font-size: 2rem;
  }
}
</style>
