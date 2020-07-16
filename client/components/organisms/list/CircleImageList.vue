<template>
  <!-- ビラ一覧 -->
  <v-row>
    <v-col v-for="(circle, key) in circles" :key="key" cols="12" xs="6" sm="4">
      <v-lazy>
        <circle-card
          v-if="circle.id && circle.image && circle.name"
          :detail="circle.detail"
          :to="`/circles/${circle.id}`"
          :src="circle.image"
          :name="circle.shortname || circle.name"
        />
      </v-lazy>
    </v-col>
  </v-row>
</template>

<script>
const CircleCard = () => import('@/components/organisms/cards/CircleCard')

export default {
  components: {
    CircleCard,
  },

  props: {
    circles: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style></style>
