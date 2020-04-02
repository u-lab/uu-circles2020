import { shuffleArr } from '@/util/arrayHelper'
import { fixedCircleById } from '@/util/circles/fixedCircle'
import {
  fetchCircleImageAll,
  fetchCircleImageById,
  fetchCirclesByFireStore
} from '@/util/circles/fetchCircle'

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
  },

  SET_CIRCLES_IMAGE(state, num, value) {
    state.circles[num] = value
  },

  UPDATE_CIRCLE_SUBIMAGES(state, obj) {
    state.circles[obj.num].subImage = obj.urls
  }
}

// actions
export const actions = {
  async fetchCircles({ commit, getters }, { fireStore, fireStorage }) {
    if (!getters.check) {
      const storageRef = fireStorage.ref()

      let circles = await fetchCirclesByFireStore(fireStore)

      circles = await fetchCircleImageAll(circles, storageRef)

      // サークルのシャッフル
      circles = shuffleArr(circles)
      // サークルの上位表示の固定
      circles = fixedCircleById(circles, 'u-lab', 0)
      commit('SET_CIRCLES', circles)
    }
  },

  async fetchSubImage({ commit, getters }, { fireStorage, circleId }) {
    let circles = getters.circles

    // 画像のURLの取得(サブ画像付き)
    circles = await fetchCircleImageById(circles, circleId, fireStorage.ref())

    commit('SET_CIRCLES', circles)
  }
}
