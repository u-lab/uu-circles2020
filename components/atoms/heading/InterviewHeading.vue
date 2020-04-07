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
  color: #dc3971;
  font-size: 20px;

  @include mq(sm) {
    font-size: 28px;
  }
}
</style>
