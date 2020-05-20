<template>
  <div>
    <interview-heading class="mb-4" :text="title" />

    <div class="d-flex justify-space-between align-center mb-4">
      <author-link :name="authorName" :src="authorImage" :to="toAuthor" />

      <format-yyyy-mm-dd v-if="date" :date="convertToDate(date)" />
    </div>
  </div>
</template>

<script>
import { convertToDate } from '@/util/date'
const AuthorLink = () => import('@/components/molecules/link/AuthorLink')
const FormatYyyyMmDd = () => import('@/components/atoms/date/FormatYyyyMmDd')
const InterviewHeading = () =>
  import('@/components/atoms/heading/InterviewHeading')

export default {
  components: {
    AuthorLink,
    FormatYyyyMmDd,
    InterviewHeading
  },

  props: {
    authorImage: {
      type: String,
      required: true
    },

    authorName: {
      type: String,
      required: true
    },

    date: {
      type: Object,
      required: true
    },

    toAuthor: {
      type: String,
      required: true
    },

    title: {
      type: String,
      required: true
    }
  },

  computed: {
    convertToDate() {
      return function(timestamp) {
        return convertToDate(timestamp)
      }
    }
  }
}
</script>

<style></style>
