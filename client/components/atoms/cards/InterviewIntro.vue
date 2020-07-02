<template>
  <div>
    <h3 v-text="title" />

    <v-img :src="src" width="350px" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: false,
      default: 'no-image.png',
    },

    title: {
      type: String,
      required: true,
    },
  },
}
</script>
