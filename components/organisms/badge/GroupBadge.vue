<template>
  <component :is="getComponentName">
    {{ text }}
  </component>
</template>

<script>
const BlueBadge = () => import('@/components/atoms/badge/BlueBadge')
const GreyBadge = () => import('@/components/atoms/badge/GreyBadge')
const LightBlueBadge = () => import('@/components/atoms/badge/LightBlueBadge')
const LightGreenBadge = () => import('@/components/atoms/badge/LightGreenBadge')
const PinkBadge = () => import('@/components/atoms/badge/PinkBadge')

export default {
  components: {
    BlueBadge,
    GreyBadge,
    LightGreenBadge,
    LightBlueBadge,
    PinkBadge
  },

  props: {
    public: {
      type: String,
      required: true
    }
  },

  computed: {
    getComponentName() {
      if (this.is_public) {
        return 'LightBlueBadge'
      }

      if (this.is_private) {
        return 'PinkBadge'
      }

      if (this.is_send) {
        return 'BlueBadge'
      }

      if (this.is_student) {
        return 'LightGreenBadge'
      }

      return 'GreyBadge'
    },

    text() {
      if (this.is_public) {
        return '公認団体'
      }

      if (this.is_private) {
        return '非公認団体'
      }

      if (this.is_send) {
        return '届出団体'
      }

      if (this.is_student) {
        return '学生団体'
      }

      return '不明'
    },

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
