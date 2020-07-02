<template>
  <div>
    <div v-for="(content, key) in contents" :key="key">
      <q-and-a-field
        :a-text="content.answer"
        :q-text="content.question"
        :a-is-mark="key === 0"
        :q-is-mark="key === 0"
      />

      <div v-if="content.image" class="d-flex justify-center mb-4">
        <v-img
          :src="content.image"
          width="100%"
          max-width="350px"
          class="radius"
        />
      </div>
    </div>
  </div>
</template>

<script>
import QAndAField from '@/components/molecules/field/QAndAField'

export default {
  components: {
    QAndAField,
  },

  props: {
    contents: {
      type: Array,
      required: true,
    },
  },
}
</script>
