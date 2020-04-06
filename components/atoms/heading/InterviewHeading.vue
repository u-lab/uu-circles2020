<template>
  <div>
    <h1 class="main-heading" v-text="text" />
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.main-heading {
  color: darken(pink, 10%);
  font-size: 28px;
}
</style>
