<template>
  <div class="mb-4">
    <question-field v-if="qText" class="mb-4" :text="qText" />
    <question-field v-else class="mb-4" text="なし" />

    <answer-field v-if="aText" :text="aText" />
    <answer-field v-else text="なし" />
  </div>
</template>

<script>
import AnswerField from '@/components/atoms/text/AnswerField'
import QuestionField from '@/components/atoms/text/QuestionField'

export default {
  components: {
    AnswerField,
    QuestionField
  },

  props: {
    aText: {
      type: [String, Array],
      required: false,
      default: null
    },

    qText: {
      type: String,
      required: false,
      default: null
    }
  }
}
</script>
