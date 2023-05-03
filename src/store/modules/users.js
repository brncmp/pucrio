import axios from 'axios'

const state = {
  users: [],
  users_prev: null,
  users_next: null,
  users_pg: null,
  users_tot_pgs: null,
  users_data: {}
}

const getters = {
  /* getURL: (state) => (pedido) => {
    return state.users.find(p => p.pedido === pedido)
  }, */
}

const mutations = {
  clear_users (state) {
    state.users = []
    state.users_prev = null
    state.users_next = null
    state.users_pg = null
    state.users_tot_pgs = null
    state.users_data = {}
  },

  set_users (state, { results, prev, next, pg, tot }) {
    state.users = results
    state.users_prev = prev
    state.users_next = next
    state.users_pg = pg
    state.users_tot_pgs = tot
  },

  /* add_users (state, result) {
    let idx = state.users.findIndex(op => op.id === result.id)
    if (idx !== -1) {
      state.users.splice(idx, 1, result)
    } else {
      state.users.push(result)
    }
  },

  add_data (state, { key, data }) {
    state.users_data[key] = data
  } */
}

const actions = {
  async getusers ({ commit, rootGetters }, url) {
    if (!url) {
      url = process.env.VUE_APP_API_URL + '/users/'
    }

    let response = await axios
      .get(url,
        { headers: rootGetters['account/getAuthHeader'], },
      )

      await commit('set_users', {
        'results': response.data.results,
        'prev': response.data.previous,
        'next': response.data.next, 
        'pg': response.data.current_page_number,
        'tot': response.data.total_pages,
      })
  },
  async getUserById ({ rootGetters }, id) {
    let url = process.env.VUE_APP_API_URL + '/users/' + id + '/'
    let response = await axios
      .get(url,
        { headers: rootGetters['account/getAuthHeader'], },
      )

      return response
  },
  postCriarUser ({ rootGetters }, params) {
    let url = process.env.VUE_APP_API_URL + '/users/'
    let response = axios
      .post(url, params,
        { headers: rootGetters['account/getAuthHeader'], },
      )
      return response
  },

  async patchEditarUser ({ rootGetters }, { id, params } ) {
    let url = process.env.VUE_APP_API_URL + '/users/' + id + '/'
    let response = await axios
      .patch(url, params,
        { headers: rootGetters['account/getAuthHeader'], },
      )
    
      return response
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
}
