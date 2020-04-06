<template>
  <div>
    <div>
      <v-img :src="interview.image" />
    </div>

    <v-container>
      <interview-heading class="mb-4" :text="interview.title" />

      <div class="d-flex justify-space-between align-center mb-4">
        <author-link
          :name="author.name"
          :src="author.image"
          :to="`/authors/${author.id}`"
        />

        <div>
          {{ getDate(interview.date.seconds) }}
        </div>
      </div>

      <div v-if="interview.description" class="pb-2">
        <p
          v-for="(text, key) in interview.description"
          :key="key"
          v-text="text"
        />
      </div>

      <q-and-a-list :contents="interview.contents" />
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AuthorLink from '@/components/molecules/link/AuthorLink'
import InterviewHeading from '@/components/atoms/heading/InterviewHeading'
import QAndAList from '@/components/organisms/field/QAndAList'

export default {
  components: {
    AuthorLink,
    InterviewHeading,
    QAndAList
  },

  async fetch({ store, params }) {
    await store.dispatch('interview/fetchAuthors')
    await store.dispatch('interview/fetchInterviews')
    await store.dispatch('interview/fetchInterviewsImage', params.name)
  },

  data() {
    return {
      author: null,
      interview: null
    }
  },

  computed: {
    ...mapGetters({
      authors: 'interview/authors',
      interviews: 'interview/interviews'
    })
  },

  created() {
    for (const interview of this.interviews) {
      if (interview.id === this.$route.params.name) {
        this.interview = interview
        break
      }
    }

    for (const author of this.authors) {
      if (author.id === this.interview.author) {
        this.author = author
        break
      }
    }
  },

  methods: {
    getDate(date) {
      const fDate = new Date(date * 1000)
      const year = fDate.getFullYear()
      const month = fDate.getMonth() + 1
      const day = fDate.getDate()

      return year + '年' + month + '月' + day + '日'
    }
  }
}
</script>
