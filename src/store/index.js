import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const DATA = 'DATA'
const ACCOUNT = 'ACCOUNT'

const store = new Vuex.Store({
  state: {
    data: {},
    account: {}
  },
  mutations: {
    [DATA] (state, data) {
      state.data = data
    },
    [ACCOUNT] (state, account) {
      state.account = account
    }
  },
  getters: {
    getData: state => state.data
  },
  actions: {
    storeData ({commit, state}, data) {
      commit(DATA, data)
    },
    storeAccount ({commit, state}, account) {
      commit(ACCOUNT, account)
    }
  }
})

export default store
