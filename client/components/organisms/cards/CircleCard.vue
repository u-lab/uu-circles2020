<template>
  <v-card
    :to="getTo"
    :href="getDetail"
    :target="getDetail ? '_blank' : undefined"
    hover
    class="pos-relative"
    ontouchstart=""
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
    detail: {
      type: String,
      default: '',
    },

    to: {
      type: [String, Object],
      default: undefined,
    },

    src: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      imageTitleOn: false,
    }
  },

  computed: {
    getDetail() {
      if (!this.detail) {
        return undefined
      }

      return this.detail
    },

    getTo() {
      if (this.getDetail) {
        return undefined
      }

      return this.to
    },
  },

  methods: {
    TitleOn() {
      this.imageTitleOn = true
    },

    TitleDown() {
      this.imageTitleOn = false
    },
  },
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
