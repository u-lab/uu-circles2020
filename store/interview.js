import interviewsJson from '@/assets/json/interviews.json'
import authorsJson from '@/assets/json/authors.json'

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

// actions
export const actions = {
  fetchAuthors({ commit, getters }) {
    if (!getters.isAuthors) {
      commit('SET_AUTHORS', authorsJson)
    }
  },

  fetchInterviews({ commit, getters }) {
    if (!getters.isInterviews) {
      commit('SET_INTERVIEWS', interviewsJson)
    }
  }
}
