<template>
  <div v-if="displayOn" class="d-flex justify-center pt-2">
    <div class="pos-relative">
      <nuxt-link v-if="to" :to="to">
        <v-img :src="src" max-width="300px" />
      </nuxt-link>

      <a v-if="href" :href="href" target="_blank" rel="noopener">
        <v-img :src="src" max-width="300px" />
      </a>

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
      required: false,
      default: ''
    },

    href: {
      type: String,
      required: false,
      default: ''
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
