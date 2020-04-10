<template>
  <ad-base to="/interviews" :src="logo" />
</template>

<script>
import AdBase from '@/components/ad/AdBase'
import Logo from '@/assets/img/go-to-interviews.jpg'

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
