import { getRandomArr } from '@/util/getRandomArr'

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

  gachaDraw({ commit }, { circles, times }) {
    // ガチャを引く(ランダムな配列を返す)
    const randomCircles = getRandomArr(circles, times)

    commit('SET_CIRCLES', randomCircles)
  }
}
