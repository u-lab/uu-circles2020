<template>
  <base-icon :href="href" :src="src" :width="width" />
</template>

<script>
import BaseIcon from '@/components/atoms/icons'

export default {
  components: {
    BaseIcon
  },

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
  },

  computed: {
    baseIconSrc() {
      return '/facebook.png'
    },

    iconSrc() {
      return this.src || baseIconSrc
    }
  }
}
</script>
