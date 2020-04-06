<template>
  <div>
    <a v-if="href" :href="href">
      <interview-intro :title="title" :src="src" />
    </a>

    <nuxt-link v-else-if="to" :to="to">
      <interview-intro :title="title" :src="src" />
    </nuxt-link>

    <div v-else>
      <interview-intro :title="title" :src="src" />
    </div>
  </div>
</template>

<script>
import InterviewIntro from '@/components/atoms/cards/InterviewIntro'

export default {
  components: {
    InterviewIntro
  },

  props: {
    href: {
      type: String,
      required: false,
      default: ''
    },

    title: {
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
