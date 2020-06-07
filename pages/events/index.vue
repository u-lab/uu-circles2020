<template>
  <v-container>
    <about-heading :num="1" class="about-company-list">
      <span class="haifun">イベント一覧</span>
    </about-heading>

    <v-card>
      <v-list>
        <v-list-item to="/events/0613-student-foodbank">
          学生応援きずなセット配布会 (6月13日)
        </v-list-item>

        <v-divider />

        <v-list-item to="/events/0409-mono-newjoy">
          <del>製作系合同新歓説明会 (4月9日)</del>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
const AboutHeading = () => import('@/components/atoms/heading/AboutHeading')

export default {
  components: {
    AboutHeading
  }
}
</script>

<style></style>
