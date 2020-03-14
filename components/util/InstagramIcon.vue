<template>
  <a :href="href" class="mr-4" target="_blank" rel="noopener">
    <v-img src="/instagram-i.png" width="50" />
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true
    }
  }
}
</script>
