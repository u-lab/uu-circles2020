<template>
  <div>
    <h1 class="circle-name-title">{{ circle.name }}</h1>

    <div class="d-sm-flex justify-space-between pb-3">
      <h2 v-show="circle.shortname" class="circle-name-title3">
        {{ circle.shortname }}
      </h2>

      <div class="text-right">
        <group-badge v-if="circle.public" :public="circle.public" />

        <span v-else class="grey white--text pa-2 radius">
          不明
        </span>
      </div>
    </div>
  </div>
</template>

<script>
const GroupBadge = () => import('@/components/organisms/badge/GroupBadge')

export default {
  components: {
    GroupBadge
  },

  props: {
    circle: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.circle-name-title {
  font-size: 18px;
  @include mq(sm) {
    font-size: 30px;
  }
}

.circle-name-title3 {
  font-size: 20px;
  &::before {
    content: '  ';
  }
}
</style>
