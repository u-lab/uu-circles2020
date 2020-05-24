<template>
  <div>
    <v-carousel
      v-if="circle.subImage"
      cycle
      dark
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(image, key) in carouselImage"
        :key="key"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <a :href="image" target="_blank" rel="noopener">
          <v-img :src="image" :alt="`${circle.name}${key} - 宇大ビラ`" />
        </a>
      </v-carousel-item>
    </v-carousel>

    <a v-else :href="circle.image" target="_blank" rel="noopener">
      <v-img :src="circle.image" :alt="`${circle.name} - 宇大ビラ`" />
    </a>
  </div>
</template>

<script>
import Circle from '@/type/Circle'

export default {
  props: {
    circle: {
      type: Circle,
      required: true
    }
  },

  computed: {
    carouselImage() {
      return [this.circle.image, ...this.circle.subImage]
    }
  }
}
</script>
