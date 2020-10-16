<template>
  <div class="text-center pt-1">
    <small>Advertisement</small>

    <components :is="getComponentName" />
  </div>
</template>

<script>
import { randInt } from '@/util/number'
const AdInterviews = () => import('@/components/molecules/ad/AdInterviews')
const AdMiyaLunch = () => import('@/components/molecules/ad/AdMiyaLunch')
const AdEngeeMix = () => import('@/components/molecules/ad/AdEngeeMix')

const rand = () => randInt(8)

export default {
  components: {
    AdInterviews,
    AdMiyaLunch,
    AdEngeeMix,
  },

  computed: {
    getComponentName() {
      const num = rand()

      if (num > 4) {
        return 'AdMiyaLunch'
      }

      return 'AdEngeeMix'
    },
  },
}
</script>
