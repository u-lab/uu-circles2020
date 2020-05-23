import { getRandArr } from '@/util/array'

/**
 * @typedef {import('@/type/Circle').default} Circle
 */

// state
export const state = () => ({
  circles: null
})

// getters
export const getters = {
  circles: (state) => state.circles,
  check: (state) => state.circles !== null
}

// mutaiton
export const mutations = {
  CLEAR_CIRCLES(state) {
    state.circles = null
  },

  SET_CIRCLES(state, circles) {
    state.circles = circles
  }
}

// actions
export const actions = {
  clearGachaResult({ commit }) {
    commit('CLEAR_CIRCLES')
  },

  /**
   *
   * @param {*} param0
   * @param {{ circles: Circle[], times: Number }} param1
   */
  gachaDraw({ commit }, { circles, times }) {
    // ガチャを引く(ランダムな配列を返す)
    const randomCircles = getRandArr(circles, times)

    commit('SET_CIRCLES', randomCircles)
  }
}
