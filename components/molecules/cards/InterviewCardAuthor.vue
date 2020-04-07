<template>
  <div class="d-flex align-start justify-space-between">
    <div>
      <p class="mb-0" v-text="`筆者はこの人！`" />
    </div>

    <author-link :href="href" :name="name" :src="src" :to="to" />
  </div>
</template>

<script>
import AuthorLink from '@/components/molecules/link/AuthorLink'

export default {
  components: {
    AuthorLink
  },

  props: {
    href: {
      type: String,
      required: false,
      default: ''
    },

    name: {
      type: String,
      required: true
    },

    src: {
      type: String,
      required: true
    },

    to: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
