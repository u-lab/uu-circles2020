<template>
  <v-row style="width: 320px;">
    <v-col cols="4" sm="4" class="d-flex justify-end">
      <p class="pt-4" style="width: 60px;">
        <v-img
          src="/icon-60x60.png"
          width="60px"
          style="border-radius: 10px;"
        />
      </p>
    </v-col>

    <v-col cols="8" sm="8" md="8">
      <div class="main-background-content d-flex flex-column">
        <span>宇都宮大学</span>
        <span>Utsunomiya</span>
        <span>University</span>
      </div>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.main-background-content {
  padding: 10px;
  border-radius: 10px;
  color: #fff;

  font-size: 28px;
  font-weight: bold;

  @include mq(sm) {
    color: #333;
    background: rgba(#fff, 0.7);
  }
}
</style>
