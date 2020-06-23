<template>
  <div>
    <h1 v-if="num === 1" class="about-heading text-center"><slot /></h1>
    <h2 v-if="num === 2" class="about-heading2"><slot /></h2>
    <h3 v-if="num === 3" class="about-heading3"><slot /></h3>
  </div>
</template>

<script>
export default {
  props: {
    num: {
      type: Number,
      required: true,
    },
  },
}
</script>
