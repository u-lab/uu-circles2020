<template>
  <div class="d-flex justify-center">
    <v-card :to="`/circles/${circle.id}`" class="pa-2" max-width="300px">
      <v-img :src="circle.image" :alt="`ガチャ結果-${circle.name}`" />

      <div class="d-flex justify-center">
        <about-heading :num="2">{{ circle.name }}</about-heading>
      </div>
    </v-card>
  </div>
</template>

<script>
const AboutHeading = () => import('@/components/atoms/heading/AboutHeading')

export default {
  components: {
    AboutHeading,
  },

  props: {
    circle: {
      type: Object,
      required: true,
    },
  },
}
</script>
