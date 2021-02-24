<template>
  <ad-base
    href="https://uu-circles.com/"
    :src="logo"
  />
</template>

<script>
import Logo from '@/assets/img/ad/uu-circles2021.png'
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
