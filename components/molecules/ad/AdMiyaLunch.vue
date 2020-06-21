<template>
  <ad-base
    href="https://twitter.com/miyameshiouen/status/1271759789148663815?s=21"
    :src="logo"
  />
</template>

<script>
import Logo from '@/assets/img/ad/miya-lunch202006.jpg'
const AdBase = () => import('@/components/molecules/ad/AdBase')

export default {
  components: {
    AdBase
  },

  computed: {
    logo() {
      return Logo
    }
  }
}
</script>
