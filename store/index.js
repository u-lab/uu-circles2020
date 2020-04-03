import clonedeep from 'lodash.clonedeep'
import { shuffleArr } from '@/util/arrayHelper'
import { fixedCircleById } from '@/util/circles/fixedCircle'
import {
  fetchCircleImageAll,
  fetchCircleImageById,
  fetchCirclesByFireStore
} from '@/util/circles/fetchCircle'

// state
export const state = () => ({
  circles: null,
  cmpCircleNum: 0
})

// getters
export const getters = {
  circles: (state) => state.circles,
  cmpCircleNum: (state) => state.cmpCircleNum,
  check: (state) => state.circles !== null,
  isCmp: (state) => state.cmpCircleNum === state.circles.length
}

// mutations
export const mutations = {
  SET_CIRCLES(state, circles) {
    state.circles = circles
  },

  SET_CIRCLES_IMAGE(state, num, value) {
    state.circles[num].image = value
  },

  UPDATE_CIRCLE_SUBIMAGES(state, obj) {
    state.circles[obj.num].subImage = obj.urls
  },

  UPDATE_CIRCLE(state, { circles, num }) {
    state.circles[num] = circles[0]
  },

  UPDATE_CIRCLES(state, { circles, startNum, endNum }) {
    for (let i = 0, num = startNum; num < endNum; i++, num++) {
      state.circles[num] = circles[i]
    }
  },

  UPDATE_CMPCIRCIRCLENUM(state, num) {
    state.cmpCircleNum = num
  }
}

// actions
export const actions = {
  async fetchCircles({ commit, getters }) {
    if (!getters.check) {
      const circles = await fetchCirclesByFireStore(this.$fireStore)

      // サークルのシャッフル
      shuffleArr(circles)
      // サークルの上位表示の固定
      fixedCircleById(circles, 'u-lab', 0)
      commit('SET_CIRCLES', circles)
    }
  },

  async fetchCircleImageAll({ commit, getters }, { startNum, endNum }) {
    if (!getters.isCmp) {
      const storageRef = this.$fireStorage.ref()

      let circles = clonedeep(getters.circles.slice(startNum, endNum))
      circles = await fetchCircleImageAll(circles, storageRef)
      commit('UPDATE_CIRCLES', { circles, startNum, endNum })
      commit('UPDATE_CMPCIRCIRCLENUM', endNum)
    }
  },

  async fetchSubImage({ commit, getters }, { circleId }) {
    let circles = getters.circles

    // 画像のURLの取得(サブ画像付き)
    circles = await fetchCircleImageById(
      circles,
      circleId,
      this.$fireStorage.ref()
    )

    commit('SET_CIRCLES', circles)
  }
}
