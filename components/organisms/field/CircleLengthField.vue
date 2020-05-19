<template>
  <div class="d-flex justify-center my-4">
    <div class="intro-background pa-6">
      <p class="mb-0 text-center">
        掲載団体数:
        <span style="font-size: 24px">{{ length }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    length: {
      type: Number,
      default: undefined
    }
  }
}
</script>

<style></style>
