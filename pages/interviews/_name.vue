<template>
  <div>
    <h1>あいう</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async fetch({ store, params }) {
    await store.dispatch('interview/fetchAuthors')
    await store.dispatch('interview/fetchInterviews')
    await store.dispatch('interview/fetchInterviewsImage', params.name)
  },

  computed: {
    ...mapGetters({
      authors: 'interview/authors',
      interviews: 'interview/interviews'
    })
  }
}
</script>
