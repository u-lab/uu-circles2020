<template>
  <v-btn :to="to" nuxt color="#0b2157" :large="large" dark>
    <slot />
  </v-btn>
</template>

<script>
export default {
  props: {
    large: {
      type: Boolean,
      default: false
    },

    to: {
      type: [String, Object],
      default: undefined
    }
  }
}
</script>
