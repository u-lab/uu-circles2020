<template>
  <div>
    <interview-heading class="mb-4" :text="title" />

    <div class="d-flex justify-space-between align-center mb-4">
      <author-link :name="authorName" :src="authorImage" :to="toAuthor" />

      <format-yyyy-mm-dd :date="convertToDate(date)" />
    </div>
  </div>
</template>

<script>
import AuthorLink from '@/components/molecules/link/AuthorLink'
import FormatYyyyMmDd from '@/components/atoms/date/FormatYyyyMmDd'
import InterviewHeading from '@/components/atoms/heading/InterviewHeading'
import { convertToDate } from '@/util/fireStore/fetch'

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
