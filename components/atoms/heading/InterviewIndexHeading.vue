<script>
export default {
  props: {
    element: {
      type: String,
      default: 'h1'
    }
  },

  render(h) {
    return h(this.element, { class: 'interview-heading' }, this.$slots.default)
  }
}
</script>

<style lang="scss" scoped>
.interview-heading {
  background-color: #3d00c7;
  color: white;
  text-align: center;
  padding: 1rem;
  font-size: 8vw;

  @include mq(sm) {
    font-size: 2rem;
  }
}
</style>
