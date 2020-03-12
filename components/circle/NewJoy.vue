<template>
  <div class="pt-4">
    <h3 class="circle-name-title3">新歓日程</h3>
    <div class="date-border">
      <v-list v-if="dates">
        <v-list-item v-for="(date, key) in dates" :key="key">
          {{ date }}
        </v-list-item>
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
      type: String,
      required: true
    }
  }
}
</script>

<style></style>
