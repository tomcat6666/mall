import Vue from 'vue'
import Vuex from 'vuex'
import state from "@/store/common/state.js"
import getters from "@/store/common/getters.js"
import mutations from "@/store/common/mutations.js"
import actions from "@/store/common/actions.js"


import carts from "@/store/other/carts.js"
import goods from "@/store/other/goods.js"


import persistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  // 默认采用的是location的方式
  plugins: [persistedState()],
  state,
  getters,
  mutations,
  actions,
  modules: {
    carts,
    goods
  },

})
