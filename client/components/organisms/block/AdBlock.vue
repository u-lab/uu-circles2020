<template>
  <div class="text-center pt-1">
    <small>Advertisement</small>

    <AdCircle />
  </div>
</template>

<script>
const AdCircle = () => import('@/components/molecules/ad/AdCircle')

export default {
  components: {
    AdCircle,
  },
}
</script>
