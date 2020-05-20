<template>
  <div>
    <div class="d-flex justify-center pt-2">
      <v-img width="100%" max-width="600px" :src="interview.image" />
    </div>

    <v-container>
      <div class="px-4">
        <interview-header
          :author-image="author.image"
          :author-name="author.name"
          :date="interview.date"
          :to-author="`/authors/${author.id}`"
          :title="interview.title"
        />

        <div v-if="interview.description" class="pb-2">
          <p
            v-for="(text, key) in interview.description"
            :key="key"
            v-text="text"
          />
        </div>

        <q-and-a-list :contents="interview.contents" />

        <div class="d-flex justify-center">
          <navy-blue-button to="/interviews">
            記事一覧へ
          </navy-blue-button>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import interviewsJson from '@/assets/json/interviews.json'
import authorsJson from '@/assets/json/authors.json'
const InterviewHeader = () =>
  import('@/components/organisms/interview/InterviewHeader')
const QAndAList = () => import('@/components/organisms/field/QAndAList')
const NavyBlueButton = () => import('@/components/atoms/buttons/NavyBlueButton')

export default {
  components: {
    InterviewHeader,
    NavyBlueButton,
    QAndAList
  },

  asyncData({ params }) {
    const interview = interviewsJson.find((obj) => obj.id === params.name)
    const author = authorsJson.find((obj) => obj.id === interview.author)
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
