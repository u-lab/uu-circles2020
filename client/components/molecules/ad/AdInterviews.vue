<template>
  <ad-base to="/interviews" :src="logo" />
</template>

<script>
import Logo from '@/assets/img/go-to-interviews2.png'
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
