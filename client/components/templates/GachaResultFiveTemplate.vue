<template>
  <div class="d-flex justify-center">
    <v-container>
      <v-row justify="center">
        <v-col v-for="gr in circles" :key="gr.id" cols="6" sm="4" md="2">
          <v-card :to="`/circles/${gr.id}`">
            <v-img :src="gr.image" :alt="`ガチャ結果-${gr.name}`" />

            <div class="d-flex justify-center">
              <about-heading :num="2">
                <span class="font-gacha-result">
                  {{ gr.shortname }}
                </span>
              </about-heading>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
const AboutHeading = () => import('@/components/atoms/heading/AboutHeading')

export default {
  components: {
    AboutHeading,
  },

  props: {
    circles: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.font-gacha-result {
  font-size: 14px;

  @include mq(sm) {
    font-size: 16px;
  }
}
</style>
