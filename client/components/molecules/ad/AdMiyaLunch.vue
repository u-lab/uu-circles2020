<template>
  <ad-base href="https://miyameshi.com/" :is-rel="true" :src="logo" />
</template>

<script>
import Logo from '@/assets/img/ad/miya-lunch202006.jpg'
const AdBase = () => import('@/components/molecules/ad/AdBase')

export default {
  components: {
    AdBase,
  },

  computed: {
    logo() {
      return Logo
    },
  },
}
</script>
