<template>
  <div class="pt-2">
    <interview-index-heading class="mb-4">
      ビラだけじゃわからない<br />サークルの魅力を知れ！
    </interview-index-heading>

    <v-container class="mb-4">
      <interview-list
        class="px-4"
        :interviews="interviews"
        :authors="authors"
      />
    </v-container>

    <div class="d-flex justify-center mb-4">
      <circle-list-btn large />
    </div>
  </div>
</template>

<script>
const CircleListBtn = () =>
  import('@/components/molecules/buttons/CircleListBtn')
const InterviewIndexHeading = () =>
  import('@/components/atoms/heading/InterviewIndexHeading')
const InterviewList = () =>
  import('@/components/organisms/interview/InterviewList')

export default {
  components: {
    CircleListBtn,
    InterviewIndexHeading,
    InterviewList
  },

  props: {
    authors: {
      type: Array /** Author[] */,
      default: undefined
    },

    interviews: {
      type: Array /** Interview[] */,
      default: undefined
    }
  }
}
</script>
