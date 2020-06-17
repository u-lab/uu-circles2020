<template>
  <!-- ビラ一覧 -->
  <v-row>
    <v-col v-for="(circle, key) in circles" :key="key" cols="12" sm="4">
      <v-lazy>
        <circle-card
          v-if="circle.id && circle.image"
          :to="`/circles/${circle.id}`"
          :src="circle.image"
          :name="circle._shortname || circle._name"
        />
      </v-lazy>
    </v-col>
  </v-row>
</template>

<script>
import CircleCard from '@/components/organisms/cards/CircleCard'

export default {
  components: {
    CircleCard
  },

  props: {
    circles: {
      type: Array,
      required: true
    }
  }
}
</script>

<style></style>
