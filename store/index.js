import { shuffleArr } from '@/util/array'
import { fixedCircleById } from '@/util/circles/fixedCircle'
import circlesJson from '@/assets/json/circles.json'
import Circle from '~/type/Circle'

// state
export const state = () => ({
  circles: null
})

// getters
export const getters = {
  circles: (state) => state.circles,
  check: (state) => state.circles !== null
}

// mutations
export const mutations = {
  SET_CIRCLES(state, circles) {
    state.circles = circles
  }
}

// actions
export const actions = {
  fetchCircles({ commit, getters }) {
    if (!getters.check) {
      const circles = circlesJson.map((obj) => new Circle(obj))
      // サークルのシャッフル
      shuffleArr(circles)
      // サークルの上位表示の固定
      fixedCircleById(circles, 'u-lab', 0)
      commit('SET_CIRCLES', circles)
    }
  }
}
