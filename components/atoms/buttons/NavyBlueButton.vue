<template>
  <v-btn :to="to" nuxt color="#0b2157" large dark>
    <slot />
  </v-btn>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: false,
      default: null
    }
  }
}
</script>
