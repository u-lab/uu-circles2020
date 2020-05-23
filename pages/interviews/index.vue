<template>
  <div class="pt-2">
    <h1 class="interview-heading mb-4">
      ビラだけじゃわからない<br />サークルの魅力を知れ！
    </h1>

    <v-container class="mb-4">
      <interview-list
        class="px-4"
        :interviews="interviews"
        :authors="authors"
      />
    </v-container>

    <div class="d-flex justify-center mb-4">
      <v-btn to="/" nuxt color="#0b2157" dark>
        <v-icon small>mdi-format-align-justify</v-icon>
        <span class="ml-2">ビラ一覧へ</span>
      </v-btn>
    </div>
  </div>
</template>

<script>
import { getAuthors } from '@/src/domains/services/AuthorService'
import { getInterviews } from '@/src/domains/services/InterviewService'
const InterviewList = () =>
  import('@/components/organisms/interview/InterviewList')

export default {
  components: {
    InterviewList
  },

  asyncData() {
    return {
      authors: getAuthors(),
      interviews: getInterviews()
    }
  },

  head() {
    return {
      title: 'インタビュー記事一覧',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'インタビュー記事一覧'
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'description',
          name: 'description',
          content:
            'ビラだけじゃわからないサークルの魅力を知れ！インタビュー記事一覧です。様々な団体にインタビューしました。ぜひ、ご覧ください！'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'ビラだけじゃわからないサークルの魅力を知れ！インタビュー記事一覧です。様々な団体にインタビューしました。ぜひ、ご覧ください！'
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
                  "@id": "https://uu-circle20.firebaseapp.com/interviews",
                  "name": "インタビュー記事一覧"
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
.interview-heading {
  background-color: #3d00c7;
  color: white;
  text-align: center;
  padding: 1rem;
  font-size: 8vw;

  @include mq(sm) {
    font-size: 2rem;
  }
}
</style>
