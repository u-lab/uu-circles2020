export const state = () => ({
  circles: null
})

export const getters = {
  circles: (state) => state.circles
}

export const mutations = {
  SET_CIRCLES(state, circles) {
    state.circles = circles
  },

  UPDATE_CIRCLE_SUBIMAGES(state, obj) {
    state.circles[obj.num].subImage = obj.urls
  }
}
