<template>
  <a :href="href" class="mr-4">
    <v-img src="/youtube.png" width="50" />
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
