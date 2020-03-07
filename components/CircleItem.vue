<template>
  <v-card
    :to="to"
    hover
    class="circle-card"
    ontouchstart=""
    @mouseover="TitleOn()"
    @mouseout="TitleDown()"
  >
    <v-img :src="src" />

    <div class="circle-title" :class="imageTitleOn ? '' : 'd-none'">
      {{ name }}
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'CircleItem',

  props: {
    to: {
      type: String,
      required: true
    },

    src: {
      type: String,
      required: true
    },

    name: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      imageTitleOn: false
    }
  },

  methods: {
    TitleOn() {
      this.imageTitleOn = true
    },

    TitleDown() {
      this.imageTitleOn = false
    }
  }
}
</script>

<style>
.circle-card {
  position: relative;
}

.circle-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);

  font-size: 20px;
}
</style>
