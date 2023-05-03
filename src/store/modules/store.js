import axios from 'axios'

const state = {
  store: [],
  store_prev: null,
  store_next: null,
  store_pg: null,
  store_tot_pgs: null,
  store_data: {}
}

const getters = {
  /* getURL: (state) => (pedido) => {
    return state.store.find(p => p.pedido === pedido)
  }, */
}

const mutations = {
  clear_store (state) {
    state.store = []
    state.store_prev = null
    state.store_next = null
    state.store_pg = null
    state.store_tot_pgs = null
    state.store_data = {}
  },

  set_store (state, { results, prev, next, pg, tot }) {
    state.store = results
    state.store_prev = prev
    state.store_next = next
    state.store_pg = pg
    state.store_tot_pgs = tot
  },

  /* add_store (state, result) {
    let idx = state.store.findIndex(op => op.id === result.id)
    if (idx !== -1) {
      state.store.splice(idx, 1, result)
    } else {
      state.store.push(result)
    }
  },

  add_data (state, { key, data }) {
    state.store_data[key] = data
  } */
}

const actions = {
  async getstore ({ commit, rootGetters }, url) {
    if (!url) {
      url = process.env.VUE_APP_API_URL + '/store/'
    }

    let response = await axios
      .get(url,
        { headers: rootGetters['account/getAuthHeader'], },
      )

      await commit('set_store', {
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
