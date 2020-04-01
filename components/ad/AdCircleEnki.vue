<template>
  <ad-base
    to="https://www.utsunomiya-u.ac.jp/important/essential/008205.php"
    :src="logo"
    target="_blank"
    rel="noopener"
  />
</template>

<script>
import AdBase from '@/components/ad/AdBase'
import Logo from '@/assets/img/circle-enki.jpg'

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
