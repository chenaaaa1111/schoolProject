import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    spaceInitTab: '',
  },
  mutations: {
    setSpaceInitTab(state, data) {
      state.spaceInitTab = data
    }
  }
})
export default store
