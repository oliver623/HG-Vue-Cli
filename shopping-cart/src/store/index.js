import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    getCartProduct:[]
  },
  mutations: {
    getCartProduct(state, getCartProduct){
      state.getCartProduct = getCartProduct
    }
  },
  actions: {
  },
  modules: {
  }
})
