<template>
  <ad-base to="/events/0409-mono-newjoy" :src="logo" />
</template>

<script>
import Logo from '@/assets/img/events/0409-mono-newjoy-logo-postponent.jpg'
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
