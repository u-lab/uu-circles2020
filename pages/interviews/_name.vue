<template>
  <interview-name-template :author="author" :interview="interview" />
</template>

<script>
import {
  findInterviewById,
  getInterviews
} from '@/src/domains/services/InterviewService'
import {
  findAuthorById,
  getAuthors
} from '@/src/domains/services/AuthorService'
const InterviewNameTemplate = () =>
  import('@/components/templates/InterviewNameTemplate')

export default {
  components: {
    InterviewNameTemplate
  },

  asyncData({ params }) {
    const interview = findInterviewById(getInterviews(), params.name)
    const author = findAuthorById(getAuthors(), interview.author)
    return {
      author,
      interview
    }
  },

  head() {
    return {
      title: this.interview.title,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.interview.title
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
                  "@id": "https://uu-circle20.firebaseapp.com/interviews",
                  "name": "インタビュー記事一覧"
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@id": "https://uu-circle20.firebaseapp.com/interviews/${this.$route.params.name}",
                  "name": "${this.interview.title}"
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
