<template>
  <div class="d-flex align-center">
    <v-avatar class="mr-2">
      <v-img :src="src" width="50px" />
    </v-avatar>

    <p class="mb-0 text--black" v-text="name" />
  </div>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: false,
      default: ''
    },

    name: {
      type: String,
      required: true
    },

    src: {
      type: String,
      required: true
    },

    to: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
// .text--black {
//   color: black;

// }
</style>
