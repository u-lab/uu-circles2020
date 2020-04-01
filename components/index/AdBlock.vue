<template>
  <div class="text-center pt-1">
    <small>Advertisement</small>

    <ad-mononewjoy0409 v-if="isDisplay" />

    <ad-circle-enki v-if="isDisplay2" />
  </div>
</template>

<script>
import AdCircleEnki from '@/components/ad/AdCircleEnki'
import AdMononewjoy0409 from '@/components/ad/AdMononewjoy0409'

function random(length = 2) {
  return Math.floor(Math.random() * length)
}

export default {
  components: {
    AdCircleEnki,
    AdMononewjoy0409
  },

  data() {
    return {
      rand: random(4)
    }
  },

  computed: {
    isDisplay() {
      return this.rand === 0
    },

    isDisplay2() {
      return this.rand !== 0
    }
  }
}
</script>
