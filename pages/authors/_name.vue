<template>
  <v-container>
    <div class="px-4">
      <v-row class="mb-4">
        <v-col cols="6">
          <v-avatar size="150px">
            <v-img :src="author.image" />
          </v-avatar>
        </v-col>
        <v-col cols="6">
          <div class="text-center">
            <h1 v-text="author.name" />
            <p v-text="author.job" />
          </div>
        </v-col>
      </v-row>

      <div class="mb-4">
        <h2>新入生に向けて一言</h2>
        <div class="radius pa-2" style="border: 1px solid #000">
          <p
            v-for="(description, key) in author.description"
            :key="key"
            v-text="description"
          />
        </div>
      </div>

      <div class="d-flex justify-center">
        <navy-blue-button to="/interviews">
          記事一覧へ
        </navy-blue-button>
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import NavyBlueButton from '@/components/atoms/buttons/NavyBlueButton'

export default {
  components: {
    NavyBlueButton
  },

  async fetch({ store }) {
    await store.dispatch('interview/fetchAuthors')
  },

  data() {
    return {
      author: null
    }
  },

  computed: {
    ...mapGetters({
      authors: 'interview/authors'
    })
  },

  created() {
    for (const author of this.authors) {
      if (this.$route.params.name === author.id) {
        this.author = author
        return
      }
    }

    return this.error({
      statusCode: 404,
      message: 'Page Not Found'
    })
  }
}
</script>
