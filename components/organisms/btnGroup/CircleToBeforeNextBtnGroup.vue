<template>
  <div class="d-flex justify-center mb-4">
    <v-btn v-if="toBefore" :to="toBefore" nuxt color="#0b2157" dark>
      <v-icon dark v-text="`mdi-menu-left`" />
      <span class="ml-2">前を見る</span>
    </v-btn>

    <v-btn v-if="toNext" :to="toNext" nuxt color="#0b2157" dark>
      <span class="ml-2">次を見る</span>
      <v-icon dark v-text="`mdi-menu-right`" />
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    toBefore: {
      type: [String, Object],
      default: undefined
    },

    toNext: {
      type: [String, Object],
      default: undefined
    }
  }
}
</script>

<style></style>
