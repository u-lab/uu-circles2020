<template>
  <div>
    <h3 class="circle-name-title3">新歓日程</h3>

    <div class="date-border">
      <v-list v-if="!dates.length && dates.length !== 0">
        <v-list-item v-for="(date, key) in dates" :key="key" v-text="date" />
      </v-list>

      <v-list v-else>
        <v-list-item>なし</v-list-item>
      </v-list>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dates: {
      type: Array,
      default: undefined
    }
  }
}
</script>

<style lang="scss" scoped>
.date-border {
  border: 1px solid #000;
  border-radius: 5px;

  @include mq(sm) {
    border-radius: 0;
  }
}
</style>
