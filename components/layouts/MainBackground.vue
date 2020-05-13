<template>
  <div v-if="$route.name === 'index'">
    <div class="main-background">
      <div v-if="$device.isMobileOrTablet">
        <v-img
          width="100vw"
          height="100vh"
          src="https://firebasestorage.googleapis.com/v0/b/uu-circle20.appspot.com/o/image%2Fmain-background-480-min.jpg?alt=media&token=0a66dbe8-e420-42fc-9dbb-9d9744c7daaa"
        />

        <div class="main-background-content-container">
          <main-background-text />
        </div>
      </div>

      <div v-else>
        <v-img width="100vw" height="100vh" src="/main-background-pc.jpg" />
      </div>

      <main-background-bottom />
    </div>

    <!-- 広告 -->
    <ad-block v-once />
  </div>
</template>

<script>
const AdBlock = () => import('@/components/index/AdBlock')
const MainBackgroundBottom = () =>
  import('@/components/organisms/field/MainBackgroundBottom')
const MainBackgroundText = () =>
  import('@/components/organisms/field/MainBackgroundText')

export default {
  components: {
    AdBlock,
    MainBackgroundBottom,
    MainBackgroundText
  }
}
</script>

<style lang="scss" scoped>
.main-background {
  position: relative;
  font-family: fot-klee-pro, sans-serif !important;
}

.main-background-content-container {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);
}

.main-background-icon-container {
  position: relative;
}
</style>
