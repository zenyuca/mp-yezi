import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const TABS = 'TABS'

const store = new Vuex.Store({
  state: {
    tabs: [
      {
        name: '主页',
        icon: '/static/images/index/msg.png',
        iconOn: '/static/images/index/msg-on.png',
        route: '/pages/index/main',
        on: true
      },
      {
        name: '消息',
        icon: '/static/images/index/msg.png',
        iconOn: '/static/images/index/msg-on.png',
        route: '/pages/index/main',
        on: false
      },
      {
        name: '签到',
        icon: '/static/images/index/sign.png',
        iconOn: '/static/images/index/sign-on.png',
        route: '/pages/index/main',
        on: false
      },
      {
        name: '我的',
        icon: '/static/images/index/me.png',
        iconOn: '/static/images/index/me-on.png',
        route: '/pages/me/main',
        on: false
      }
    ]
  },
  mutations: {
    [TABS] (state, data) {
      state.tabs = data
    }
  },
  getters: {
    getTabs: state => state.tabs
  },
  actions: {
    storeTabs ({commit, state}, data) {
      commit(TABS, data)
    }
  }
})

export default store
