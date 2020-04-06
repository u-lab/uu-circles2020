<template>
  <div class="question">
    <p class="mb-0" v-text="text"></p>

    <div class="question-mark"></div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.question {
  position: relative;
  background: rgba(pink, 0.5);
  padding: 1rem 2.5rem 1rem 1.5rem;
  border-radius: 12px;
}

.question-mark {
  position: absolute;
  top: -1rem;
  left: 0.5rem;
  color: darken(red, 10%);
  font-size: 1.5rem;
  font-weight: 900;

  &::before {
    content: 'Q';
  }
}
</style>
