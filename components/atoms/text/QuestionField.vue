<template>
  <div class="question">
    <p class="mb-0" v-text="text" />

    <div v-if="isMark" class="question-mark" />
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: false,
      default: ''
    },

    isMark: {
      type: Boolean,
      required: false,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.question {
  position: relative;
  background: #fef4fb;
  padding: 1rem 2.5rem 1rem 1.5rem;
  border-radius: 12px;
}

.question-mark {
  position: absolute;
  top: -1rem;
  left: 0.5rem;
  color: #dc3971;
  font-size: 1.5rem;
  font-weight: 900;

  &::before {
    content: 'Q';
  }
}
</style>
