<template>
  <div class="answer">
    <template v-if="isArray(text)">
      <p v-for="(t, key) in text" :key="key" class="mb-0" v-text="t" />
    </template>
    <template v-else>
      <p class="mb-0" v-text="t" />
    </template>

    <div class="answer-mark"></div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: [String, Array],
      required: false,
      default: ''
    }
  },

  computed: {
    isArray() {
      return function(value) {
        return Array.isArray(value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.answer {
  position: relative;
  background: rgba(lightgreen, 0.5);
  padding: 1rem 2.5rem 1rem 1.5rem;
  border-radius: 12px;
}

.answer-mark {
  position: absolute;
  top: -1rem;
  left: 0.5rem;
  color: darken(green, 10%);
  font-size: 1.5rem;
  font-weight: 900;

  &::before {
    content: 'A';
  }
}
</style>
