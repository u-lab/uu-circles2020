<template>
  <div class="pt-2">
    <h1 class="interview-heading mb-4">
      ビラだけじゃわからない<br />サークルの魅力を知れ！
    </h1>

    <v-container class="mb-4">
      <div class="px-4">
        <interview-list :interviews="interviews" :authors="authors" />
      </div>
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
