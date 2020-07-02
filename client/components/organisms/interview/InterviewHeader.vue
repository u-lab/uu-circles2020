<template>
  <div>
    <interview-heading class="mb-4" :text="title" />

    <div class="d-flex justify-space-between align-center mb-4">
      <author-link :name="authorName" :src="authorImage" :to="toAuthor" />

      <format-yyyy-mm-dd v-if="date" :date="date" />
    </div>
  </div>
</template>

<script>
const AuthorLink = () => import('@/components/molecules/link/AuthorLink')
const FormatYyyyMmDd = () => import('@/components/atoms/date/FormatYyyyMmDd')
const InterviewHeading = () =>
  import('@/components/atoms/heading/InterviewHeading')

export default {
  components: {
    AuthorLink,
    FormatYyyyMmDd,
    InterviewHeading,
  },

  props: {
    authorImage: {
      type: String,
      required: true,
    },

    authorName: {
      type: String,
      required: true,
    },

    date: {
      type: Date,
      default: undefined,
    },

    toAuthor: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>
