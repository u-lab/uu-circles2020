<script>
export default {
  props: {
    element: {
      type: String,
      required: true,
    },
  },

  render(h) {
    return h(
      this.element,
      { class: 'font-weight-bold site-title m-0 white--text' },
      '宇都宮大学のサークルビラ一覧'
    )
  },
}
</script>

<style lang="scss" scoped>
.site-title {
  font-size: 18px;
  @include mq(sm) {
    font-size: 30px;
  }
}
</style>
