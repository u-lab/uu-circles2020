<template>
  <div class="d-flex align-center">
    <v-avatar>
      <v-img :src="src" width="50px" />
    </v-avatar>

    <p class="mb-0" v-text="name" />
  </div>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: false,
      default: ''
    },

    name: {
      type: String,
      required: true
    },

    src: {
      type: String,
      required: true
    },

    to: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
