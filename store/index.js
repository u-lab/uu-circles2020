export const circles = () => ({
  circles: {}
})

export const mutations = {
  addCircle(circles, ctx) {
    circles.circles.push(ctx)
  },

  addCircles(circles, ctx) {
    circles.circles = ctx
  }
}
