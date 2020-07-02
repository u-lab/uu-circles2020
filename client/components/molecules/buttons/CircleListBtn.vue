<template>
  <navy-blue-button to="/" :large="large">
    <v-icon small>mdi-format-align-justify</v-icon>
    <span class="ml-2">サークルビラ一覧へ</span>
  </navy-blue-button>
</template>

<script>
import NavyBlueButton from '@/components/atoms/buttons/NavyBlueButton'

export default {
  components: {
    NavyBlueButton,
  },

  props: {
    large: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
