<template>
  <div class="d-flex justify-center px-2 mb-2">
    <div>
      <v-card to="/gacha" class="mb-1">
        <v-img src="/gacha-logo.png" alt="ガチャを回す" max-width="300px" />
      </v-card>
      <p class="font-klee text-center mb-0">
        サークルが選べない新入生へ
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.index-gacha-intro {
  &::before {
    content: '▲';
  }
}
</style>
