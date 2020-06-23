<template>
  <base-icon :href="href" :src="iconSrc" :width="width" />
</template>

<script>
import BaseIcon from '@/components/atoms/icons/BaseIcon'

export default {
  components: {
    BaseIcon,
  },

  props: {
    href: {
      type: String,
      required: true,
    },

    src: {
      type: String,
      default: '',
      required: false,
    },

    width: {
      type: [Number, String],
      default: 50,
      required: false,
    },
  },

  computed: {
    baseIconSrc() {
      return '/hp.png'
    },

    iconSrc() {
      return this.src || this.baseIconSrc
    },
  },
}
</script>
