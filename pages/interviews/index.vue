<template>
  <interview-index-template :authors="authors" :interviews="interviews" />
</template>

<script>
import { getAuthors } from '@/src/domains/services/AuthorService'
import { getInterviews } from '@/src/domains/services/InterviewService'
const InterviewIndexTemplate = () =>
  import('@/components/templates/InterviewIndexTemplate')

export default {
  components: {
    InterviewIndexTemplate,
  },

  asyncData() {
    return {
      authors: getAuthors(),
      interviews: getInterviews(),
    }
  },

  head() {
    return {
      title: 'インタビュー記事一覧',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'インタビュー記事一覧',
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'description',
          name: 'description',
          content:
            'ビラだけじゃわからないサークルの魅力を知れ！インタビュー記事一覧です。様々な団体にインタビューしました。ぜひ、ご覧ください！',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'ビラだけじゃわからないサークルの魅力を知れ！インタビュー記事一覧です。様々な団体にインタビューしました。ぜひ、ご覧ください！',
        },
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
          type: 'application/ld+json',
        },
      ],
    }
  },
}
</script>
