<template>
  <div>
    <time :datetime="date" v-text="formatDate" />
  </div>
</template>

<script>
export default {
  props: {
    date: {
      type: Date,
      required: true
    }
  },

  computed: {
    formatDate() {
      const date = this.date
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()

      return year + '年' + month + '月' + day + '日'
    }
  }
}
</script>
