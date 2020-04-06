import {
  fetchFromFireStore,
  fetchInterviewsImageAll,
  fetchAuthorsImageAll
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
      const interviews = await fetchFromFireStore(this.$fireStore, 'interviews')

      await fetchInterviewsImageAll(interviews, this.$fireStorage.ref())

      commit('SET_INTERVIEWS', interviews)
    }
  }

  // async fetchInterviewsImage({ commit, getters }, interviewId) {
  //   const interviews = await fetchInterviewsImageAll(
  //     cloneDeep(getters.interviews),
  //     this.$fireStore.ref(),
  //     interviewId
  //   )

  //   commit('SET_INTERVIEWS', interviews)
  // }
}
