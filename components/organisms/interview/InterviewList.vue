<template>
  <div>
    <h2>記事一覧</h2>

    <div v-for="(interview, key) in interviews" :key="key">
      <interview-card
        :title="interview.title"
        :name="getAuthorName(interview.author)"
        :to-author="`authors/${interview.author}`"
        :to-interview="`interviews/${interview.id}`"
        :src-author="getAuthorSrc(interview.author)"
        :src-interview="interview.image"
      />
    </div>
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
