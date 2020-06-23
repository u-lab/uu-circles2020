<template>
  <a
    :href="`mailto:${email}?subject=${subject}`"
    class="text-decoration-none"
    light
  >
    <v-icon :size="width" v-text="'mdi-email'" />
  </a>
</template>

<script>
export default {
  props: {
    email: {
      type: String,
      required: true,
    },

    subject: {
      type: String,
      default: '宇都宮大学サークルビラ一覧からのお知らせ',
      required: false,
    },

    width: {
      type: [Number, String],
      default: 50,
      required: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.text-decoration-none {
  text-decoration: none;
}
</style>
