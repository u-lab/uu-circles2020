<template>
  <v-container>
    <h1>インタビュー</h1>

    <interview-list :interviews="interviews" :authors="authors" />
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import InterviewList from '@/components/organisms/interview/InterviewList'

export default {
  components: {
    InterviewList
  },

  async fetch({ store }) {
    await store.dispatch('interview/fetchAuthors')
    await store.dispatch('interview/fetchInterviews')
  },

  computed: {
    ...mapGetters({
      authors: 'interview/authors',
      interviews: 'interview/interviews'
    })
  }
}
</script>
