<template>
  <v-app>
    <main-background />

    <navbar />

    <v-content>
      <nuxt />
    </v-content>

    <uu-footer />
  </v-app>
</template>

<script>
const Navbar = () => import('@/components/layouts/Navbar')
const MainBackground = () => import('@/components/layouts/MainBackground')
const UuFooter = () => import('@/components/layouts/UuFooter')

export default {
  components: {
    Navbar,
    MainBackground,
    UuFooter,
  },

  mounted() {
    Typekit.load({ async: true })
  },
}
</script>
