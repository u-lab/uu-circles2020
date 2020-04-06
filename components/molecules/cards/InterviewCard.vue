<template>
  <div style="max-width: 350px">
    <interview-card-intro
      :title="title"
      :to="toInterview"
      :src="srcInterview"
    />

    <interview-card-author :name="name" :to="toAuthor" :src="srcAuthor" />
  </div>
</template>

<script>
import InterviewCardAuthor from '@/components/molecules/cards/InterviewCardAuthor'
import InterviewCardIntro from '@/components/molecules/cards/InterviewCardIntro'

export default {
  components: {
    InterviewCardAuthor,
    InterviewCardIntro
  },

  props: {
    name: {
      type: String,
      required: true
    },

    title: {
      type: String,
      required: true
    },

    toAuthor: {
      type: String,
      required: false,
      default: ''
    },

    toInterview: {
      type: String,
      required: false,
      default: ''
    },

    srcAuthor: {
      type: String,
      required: true
    },

    srcInterview: {
      type: String,
      required: true
    }
  }
}
</script>
