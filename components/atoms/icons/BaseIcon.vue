<template>
  <a :href="href" target="_blank" rel="noopener">
    <v-img :src="src" :width="width" />
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true
    },

    src: {
      type: String,
      default: null,
      required: false
    },

    width: {
      type: [Number, String],
      default: 50,
      required: false
    }
  }
}
</script>
