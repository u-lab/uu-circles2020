<template>
  <header class="d-flex justify-space-around app-bar mt-4 py-3">
    <div class="background-container">
      <div class="text-center background-color">
        <h1 v-if="$route.path === '/'" class="header-heading m0">
          宇都宮大学のサークルビラ一覧
        </h1>
        <p v-else class="header-heading m0">
          宇都宮大学のサークルビラ一覧
        </p>
        <p class="mb-0 header-subheading">企画・運営 U-lab</p>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.app-bar {
  background-image: url('/header-background.png');
  background-size: cover;
  font-family: fot-klee-pro, sans-serif !important;
}

.header-subheading {
  font-size: 14px;
  color: #fff;

  @include mq(sm) {
    font-size: 20px;
  }
}

.header-heading {
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 0 !important;
  @include mq(sm) {
    font-size: 30px;
  }
}
</style>
