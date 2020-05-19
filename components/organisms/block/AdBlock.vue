<template>
  <div class="text-center pt-1">
    <small>Advertisement</small>

    <ad-mononewjoy0409 v-if="isDisplay" />

    <ad-interviews v-if="isDisplay2" />

    <ad-circle-enki v-if="isDisplay3" />
  </div>
</template>

<script>
import AdCircleEnki from '@/components/molecules/ad/AdCircleEnki'
import AdInterviews from '@/components/molecules/ad/AdInterviews'
import AdMononewjoy0409 from '@/components/molecules/ad/AdMononewjoy0409'

function random(length = 2) {
  return Math.floor(Math.random() * length)
}

export default {
  components: {
    AdCircleEnki,
    AdInterviews,
    AdMononewjoy0409
  },

  data() {
    return {
      rand: random(8)
    }
  },

  computed: {
    isDisplay() {
      return this.rand <= 1
    },

    isDisplay2() {
      return this.rand > 1 || this.rand <= 6
    },

    isDisplay3() {
      return this.rand > 6
    }
  }
}
</script>
