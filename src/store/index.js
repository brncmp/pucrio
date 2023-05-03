import Vue from 'vue'
import Vuex from 'vuex'

import users from './modules/users'
import store from './modules/store'
import products from './modules/products'



Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users: users,
    store: store,
    products: products,
  },
})
