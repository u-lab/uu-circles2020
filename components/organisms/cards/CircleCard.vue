<template>
  <v-card
    :to="to"
    hover
    class="pos-relative"
    @mouseover="TitleOn()"
    @mouseout="TitleDown()"
  >
    <v-img :src="src" :alt="`${name}のビラ`" />

    <div class="circle-title" :class="imageTitleOn ? '' : 'd-none'">
      {{ name }}
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    to: {
      type: [String, Object],
      default: undefined
    },

    src: {
      type: String,
      required: true
    },

    name: {
      type: String,
      default: undefined
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
.circle-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);

  background: rgba(255, 255, 255, 0.7);
  border-radius: 5px;
  padding: 5px;
  font-size: 20px;
}
</style>
