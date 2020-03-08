<template>
  <span v-if="is_public()" class="light-blue white--text pa-2 radius">
    公認団体
  </span>

  <span v-else-if="is_send()" class="blue white--text pa-2 radius">
    届出団体
  </span>

  <span v-else-if="is_private()" class="pink lighten-2 white--text pa-2 radius">
    非公認団体
  </span>

  <span v-else-if="is_student()" class="light-green white--text pa-2 radius">
    学生団体
  </span>

  <span v-else class="grey white--text pa-2 radius">
    不明
  </span>
</template>

<script>
export default {
  props: {
    public: {
      type: String,
      required: true
    }
  },

  methods: {
    is_public() {
      return this.public === 'public'
    },

    is_send() {
      return this.public === 'send'
    },

    is_private() {
      return this.public === 'private'
    },

    is_student() {
      return this.public === 'student'
    }
  }
}
</script>
