<template>
  <div class="text-center pt-1">
    <small>Advertisement</small>

    <ad-interviews />
  </div>
</template>

<script>
const AdInterviews = () => import('@/components/molecules/ad/AdInterviews')

export default {
  components: {
    AdInterviews
  }
}
</script>
