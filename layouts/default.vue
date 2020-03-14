<template>
  <v-app>
    <main-background />

    <navbar />

    <v-content>
      <v-container fluid class="px-6 pb-1">
        <nuxt />
      </v-container>
    </v-content>

    <uu-footer />
  </v-app>
</template>

<script>
import Navbar from '@/components/layouts/Navbar'
import MainBackground from '@/components/layouts/MainBackground'
import UuFooter from '@/components/layouts/UuFooter'

export default {
  components: {
    Navbar,
    MainBackground,
    UuFooter
  },

  mounted() {
    Typekit.load({ async: true })
  }
}
</script>
