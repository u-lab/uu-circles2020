<template>
  <div v-if="displayOn" class="d-flex justify-center pt-2">
    <div class="pos-relative">
      <nuxt-link :to="to">
        <v-img :src="src" max-width="300px" />
      </nuxt-link>

      <div class="pos-topRight">
        <v-btn icon @click="close()">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },

    to: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      displayOn: true
    }
  },

  methods: {
    close() {
      this.displayOn = false
    }
  }
}
</script>

<style lang="scss" scoped>
.pos-relative {
  position: relative;
}

.pos-topRight {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
