<template>
  <ad-base
    href="https://www.utsunomiya-u.ac.jp/important/essential/008205.php"
    :src="logo"
  />
</template>

<script>
import Logo from '@/assets/img/circle-enki.jpg'
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
