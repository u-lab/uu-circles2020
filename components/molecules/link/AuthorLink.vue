<template>
  <div>
    <a v-if="href" :href="href" class="a-none">
      <author-text :name="name" :src="src" />
    </a>

    <nuxt-link v-else-if="to" :to="to" class="a-none">
      <author-text :name="name" :src="src" />
    </nuxt-link>

    <div v-else>
      <author-text :name="name" :src="src" />
    </div>
  </div>
</template>

<script>
import AuthorText from '@/components/atoms/text/AuthorText'

export default {
  components: {
    AuthorText
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

<style lang="scss" scoped>
.a-none {
  color: rgba(0, 0, 0, 0.87);

  text-decoration: none;
}
</style>
