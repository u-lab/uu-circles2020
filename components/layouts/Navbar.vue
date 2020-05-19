<template>
  <header class="app-bar font-klee text-center mt-4 py-3">
    <site-title-text :element="titleElement" />

    <p class="mb-0 header-subheading white--text">企画・運営 U-lab</p>
  </header>
</template>

<script>
const SiteTitleText = () => import('@/components/atoms/text/SiteTitleText')

export default {
  components: {
    SiteTitleText
  },

  computed: {
    titleElement() {
      return this.$route.path === '/' ? 'h1' : 'p'
    }
  }
}
</script>

<style lang="scss" scoped>
.app-bar {
  background-image: url('/header-background.png');
  background-size: cover;
}

.header-subheading {
  font-size: 14px;

  @include mq(sm) {
    font-size: 20px;
  }
}
</style>
