<template>
  <div>
    <div class="text-center">
      <h2>記事一覧</h2>
    </div>

    <v-row v-for="(interview, key) in interviews" :key="key" justify="center">
      <v-col cols="12" sm="6" md="4">
        <interview-card
          :title="interview.title"
          :name="getAuthorName(interview.author)"
          :to-author="`authors/${interview.author}`"
          :to-interview="`interviews/${interview.id}`"
          :src-author="getAuthorSrc(interview.author)"
          :src-interview="interview.image"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import InterviewCard from '@/components/molecules/cards/InterviewCard'

export default {
  components: {
    InterviewCard
  },

  props: {
    interviews: {
      type: Array,
      required: true
    },

    authors: {
      type: Array,
      required: true
    }
  },

  computed: {
    getAuthor() {
      return function(authorId) {
        const authors = this.authors
        for (const author of authors) {
          if (author.id === authorId) {
            return author
          }
        }

        return {
          name: '不明',
          src: '/no-image.png'
        }
      }
    }
  },

  methods: {
    getAuthorName(authorId) {
      const author = this.getAuthor(authorId)
      return author.name
    },

    getAuthorSrc(authorId) {
      const author = this.getAuthor(authorId)
      return author.image
    }
  }
}
</script>
