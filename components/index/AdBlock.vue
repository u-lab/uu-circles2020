<template>
  <div class="text-center pt-1">
    <small>Advertisement</small>

    <ad-mononewjoy0409 v-if="isDisplay" />
  </div>
</template>

<script>
import AdMononewjoy0409 from '@/components/ad/AdMononewjoy0409'

// function random(length = 2) {
//   return Math.floor(Math.random() * length)
// }

export default {
  components: {
    AdMononewjoy0409
  },

  computed: {
    isDisplay() {
      // return random(2) === 0
      return true
    }
  }
}
</script>
