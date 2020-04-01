<template>
  <ad-base to="/events/0409-mono-newjoy" :src="logo" />
</template>

<script>
import AdBase from '@/components/ad/AdBase'
import Logo from '@/assets/img/events/0409-mono-newjoy-logo-postponent.jpg'

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
