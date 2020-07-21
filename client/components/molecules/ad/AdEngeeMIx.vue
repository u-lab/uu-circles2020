<template>
  <ad-base href="https://www.instagram.com/engineermix/" :src="logo" />
</template>

<script>
import Logo from '@/assets/img/ad/engieer-mix.jpg'
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
