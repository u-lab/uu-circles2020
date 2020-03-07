<template>
  <v-row class="background">
    <v-col cols="12">
      <about-heading :num="1">
        協賛企業様一覧
      </about-heading>
    </v-col>

    <v-col cols="12">
      まだありません。現在、協賛企業様を募集しております。
    </v-col>

    <v-col cols="12" class="d-flex justify-center">
      <circle-list-btn />
    </v-col>
  </v-row>
</template>

<script>
import AboutHeading from '@/components/about/AboutHeading'
import CircleListBtn from '@/components/util/CircleListBtn'

export default {
  components: {
    AboutHeading,
    CircleListBtn
  }
}
</script>
