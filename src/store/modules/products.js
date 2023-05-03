import axios from 'axios'

const state = {
  products: [],
  products_prev: null,
  products_next: null,
  products_pg: null,
  products_tot_pgs: null,
  products_data: {}
}

const getters = {
  /* getURL: (state) => (pedido) => {
    return state.products.find(p => p.pedido === pedido)
  }, */
}

const mutations = {
  clear_products (state) {
    state.products = []
    state.products_prev = null
    state.products_next = null
    state.products_pg = null
    state.products_tot_pgs = null
    state.products_data = {}
  },

  set_products (state, { results, prev, next, pg, tot }) {
    state.products = results
    state.products_prev = prev
    state.products_next = next
    state.products_pg = pg
    state.products_tot_pgs = tot
  },

  /* add_products (state, result) {
    let idx = state.products.findIndex(op => op.id === result.id)
    if (idx !== -1) {
      state.products.splice(idx, 1, result)
    } else {
      state.products.push(result)
    }
  },

  add_data (state, { key, data }) {
    state.products_data[key] = data
  } */
}

const actions = {
  async getproducts ({ commit, rootGetters }, url) {
    if (!url) {
      url = process.env.VUE_APP_API_URL + '/products/'
    }

    let response = await axios
      .get(url,
        { headers: rootGetters['account/getAuthHeader'], },
      )

      await commit('set_products', {
        'results': response.data.results,
        'prev': response.data.previous,
        'next': response.data.next, 
        'pg': response.data.current_page_number,
        'tot': response.data.total_pages,
      })
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
}
