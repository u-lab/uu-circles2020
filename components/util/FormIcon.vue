<template>
  <a :href="href" class="mr-4" target="_blank" rel="noopener">
    <v-img src="/form-icon.png" width="50" />
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
