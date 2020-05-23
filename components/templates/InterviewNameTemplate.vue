<template>
  <div>
    <v-row justify="center" class="pt-2">
      <v-img width="100%" max-width="600px" :src="interview.image" />
    </v-row>

    <v-container>
      <div class="px-4">
        <interview-header
          :author-image="author.image"
          :author-name="author.name"
          :date="interview.date"
          :to-author="`/authors/${author.id}`"
          :title="interview.title"
        />

        <div v-if="interview.description" class="pb-2">
          <p
            v-for="(text, key) in interview.description"
            :key="key"
            v-text="text"
          />
        </div>

        <q-and-a-list :contents="interview.contents" />

        <div class="d-flex justify-center">
          <navy-blue-button to="/interviews">
            記事一覧へ
          </navy-blue-button>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import Author from '@/type/Author'
import Interview from '@/type/Interview'
const InterviewHeader = () =>
  import('@/components/organisms/interview/InterviewHeader')
const QAndAList = () => import('@/components/organisms/field/QAndAList')
const NavyBlueButton = () => import('@/components/atoms/buttons/NavyBlueButton')

export default {
  components: {
    InterviewHeader,
    NavyBlueButton,
    QAndAList
  },

  props: {
    author: {
      type: Author,
      required: true
    },

    interview: {
      type: Interview,
      required: true
    }
  }
}
</script>
