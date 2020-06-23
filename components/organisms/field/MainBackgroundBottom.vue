<template>
  <v-row class="main-background-bottom">
    <v-col cols="2" sm="3" class="main-background-bottom-l">
      <div class="text-center">
        <v-icon color="#fff" small>mdi-information-variant</v-icon>
        <p class="mb-0" style="font-size: 10px">重要な<br />お知らせ</p>
      </div>
    </v-col>

    <v-col cols="10" sm="9" class="main-background-bottom-r">
      <p class="mb-0 text-center">
        新型コロナによって新歓日程に変更が生じる可能性がございます
      </p>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.main-background-bottom {
  position: absolute;
  max-width: 500px;
  margin: 0 !important;
  bottom: 1vh;

  @include mq(sm) {
    bottom: 0;
  }

  &-l {
    background: grey;
    color: #fff;
    padding: 10px !important;
  }

  &-r {
    background: rgba(#fff, 0.7);
    padding: 15px !important;

    p {
      font-size: 0.9rem;
    }
  }
}
</style>
