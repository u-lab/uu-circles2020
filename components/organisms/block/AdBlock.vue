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

const rand = () => randInt(4)

export default {
  components: {
    AdInterviews,
    AdMiyaLunch,
  },

  computed: {
    getComponentName() {
      return rand() > 2 ? 'AdMiyaLunch' : 'AdInterviews'
    },
  },
}
</script>
