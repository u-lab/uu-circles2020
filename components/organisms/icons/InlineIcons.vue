<template>
  <inline-icons :sns="sns" />
</template>

<script>
import InlineIcons from '@/components/molecules/icons/InlineIcons'

export default {
  components: {
    InlineIcons
  },

  props: {
    sns: {
      type: Object,
      required: true
    }
  }
}
</script>
