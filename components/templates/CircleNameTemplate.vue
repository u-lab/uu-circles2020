<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <circle-image :circle="circle" />
      </v-col>

      <v-col cols="12" md="6">
        <circle-name-header :circle="circle" />

        <v-list v-if="circle.description">
          <v-list-item
            v-for="(text, key) in circle.description"
            :key="'description' + key"
          >
            {{ text }}
          </v-list-item>
        </v-list>

        <div class="pt-4">
          <circle-date-field :dates="circle.date" />
        </div>

        <div class="py-4">
          <inline-icons v-if="circle.sns" :sns="circle.sns" />
        </div>

        <circle-to-before-next-btn-group
          :to-before="toBefore"
          :to-next="toNext"
        />

        <div class="d-flex justify-center">
          <circle-list-btn />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Circle from '@/type/Circle'
const CircleImage = () => import('@/components/organisms/image/CircleImage')
const CircleListBtn = () =>
  import('@/components/molecules/buttons/CircleListBtn')
const CircleToBeforeNextBtnGroup = () =>
  import('@/components/organisms/btnGroup/CircleToBeforeNextBtnGroup')
const CircleDateField = () =>
  import('@/components/molecules/field/CircleDateField')
const CircleNameHeader = () =>
  import('@/components/organisms/field/CircleNameHeader')
const InlineIcons = () => import('@/components/organisms/icons/InlineIcons')

export default {
  components: {
    CircleDateField,
    CircleToBeforeNextBtnGroup,
    CircleImage,
    CircleListBtn,
    CircleNameHeader,
    InlineIcons
  },

  props: {
    circle: {
      type: Circle,
      required: true
    },

    circles: {
      type: Array,
      required: true
    },

    beforeCircle: {
      type: Circle,
      default: undefined
    },

    nextCircle: {
      type: Circle,
      default: undefined
    }
  },

  computed: {
    toNext() {
      return this.nextCircle ? `/circles/${this.nextCircle.id}` : undefined
    },

    toBefore() {
      return this.beforeCircle ? `/circles/${this.beforeCircle.id}` : undefined
    }
  }
}
</script>
