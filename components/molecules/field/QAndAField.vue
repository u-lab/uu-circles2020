<template>
  <div class="mb-4">
    <question-field class="mb-4" :text="getQText" :a-is-mark="aIsMark" />

    <answer-field :text="getAText" :q-is-mark="qIsMark" />
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
    aIsMark: {
      type: Boolean,
      required: false,
      default: false
    },

    qIsMark: {
      type: Boolean,
      required: false,
      default: false
    },

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
  },

  computed: {
    getAText() {
      return this.aText || 'なし'
    },

    getQText() {
      return this.qText || 'なし'
    }
  }
}
</script>
