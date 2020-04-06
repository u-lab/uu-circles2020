import cloneDeep from 'lodash.clonedeep'
import {
  fetchFromFireStore,
  fetchInterviewsImageAll,
  fetchAuthorsImageAll,
  fetchInterviewsContentImageAll
} from '@/util/fireStore/fetch'

// state
export const state = () => ({
  authors: null,
  interviews: null
})

// getters
export const getters = {
  authors: (state) => state.authors,
  interviews: (state) => state.interviews,
  isAuthors: (state) => state.authors !== null,
  isInterviews: (state) => state.interviews !== null
}

// mutaiton
export const mutations = {
  SET_AUTHORS(state, authors) {
    state.authors = authors
  },

  SET_INTERVIEWS(state, interviews) {
    state.interviews = interviews
  }
}

export const actions = {
  async fetchAuthors({ commit, getters }) {
    if (!getters.isAuthors) {
      let authors = await fetchFromFireStore(
        this.$fireStore,
        'interviews_authors'
      )

      authors = await fetchAuthorsImageAll(authors, this.$fireStorage.ref())

      commit('SET_AUTHORS', authors)
    }
  },

  async fetchInterviews({ commit, getters }) {
    if (!getters.isInterviews) {
      let interviews = await fetchFromFireStore(this.$fireStore, 'interviews')

      interviews = await fetchInterviewsImageAll(
        interviews,
        this.$fireStorage.ref()
      )

      commit('SET_INTERVIEWS', interviews)
    }
  },

  async fetchInterviewsImage({ commit, getters }, interviewId) {
    console.log(getters.interviews)
    const interviews = await fetchInterviewsContentImageAll(
      cloneDeep(getters.interviews),
      this.$fireStorage.ref(),
      interviewId
    )

    commit('SET_INTERVIEWS', interviews)
  }
}
