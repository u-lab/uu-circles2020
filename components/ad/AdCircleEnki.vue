<template>
  <ad-base
    href="https://www.utsunomiya-u.ac.jp/important/essential/008205.php"
    :src="logo"
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
