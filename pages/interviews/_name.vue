<template>
  <div>
    <div class="d-flex justify-center">
      <v-img max-width="600px" :src="interview.image" />
    </div>

    <v-container>
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
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import InterviewHeader from '@/components/organisms/interview/InterviewHeader'
import QAndAList from '@/components/organisms/field/QAndAList'

export default {
  components: {
    InterviewHeader,
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
  }
}
</script>
