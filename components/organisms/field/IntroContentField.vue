<template>
  <div>
    <div class="d-flex justify-center py-2">
      <div class="font-klee intro-background pa-6">
        <p class="mb-0">
          このサイトは新入生の新生活を応援したいという思いから有志によって作られました
        </p>
        <p class="mb-0">在校生一同皆様のご入学を心からお祝い申し上げます</p>
      </div>
    </div>

    <div class="d-flex justify-center align-start">
      <div class="font-weight-bold text-center pt-2">
        <p class="tap-intro-content-detail mb-0">気になるサークルがあったら</p>
        <p class="tap-intro-content-tap mb-0 d-md-none">Tap!!</p>
        <p class="tap-intro-content-tap mb-0 d-none d-md-block">Click!!</p>
      </div>

      <v-icon size="90" color="#000">
        mdi-gesture-tap
      </v-icon>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tap-intro-content-detail {
  font-size: 1.1rem;

  @include mq(sm) {
    font-size: 1.5rem;
  }
}

.tap-intro-content-tap {
  font-size: 2rem;

  @include mq(sm) {
    font-size: 2.5rem;
  }
}
</style>
