import axios from 'axios'

const state = {
  requests: [],
  requests_prev: null,
  requests_next: null,
  requests_pg: null,
  requests_tot_pgs: null,
  requests_data: {}
}

const getters = {
  /* getURL: (state) => (pedido) => {
    return state.requests.find(p => p.pedido === pedido)
  }, */
}

const mutations = {
  clear_requests (state) {
    state.requests = []
    state.requests_prev = null
    state.requests_next = null
    state.requests_pg = null
    state.requests_tot_pgs = null
    state.requests_data = {}
  },

  set_requests (state, { results, prev, next, pg, tot }) {
    state.requests = results
    state.requests_prev = prev
    state.requests_next = next
    state.requests_pg = pg
    state.requests_tot_pgs = tot
  },

  /* add_requests (state, result) {
    let idx = state.requests.findIndex(op => op.id === result.id)
    if (idx !== -1) {
      state.requests.splice(idx, 1, result)
    } else {
      state.requests.push(result)
    }
  },

  add_data (state, { key, data }) {
    state.requests_data[key] = data
  } */
}

const actions = {
  async getrequests ({ commit, rootGetters }, url) {
    if (!url) {
      url = process.env.VUE_APP_API_URL + '/requests/'
    }

    let response = await axios
      .get(url,
        { headers: rootGetters['account/getAuthHeader'], },
      )

      await commit('set_requests', {
        'results': response.data.results,
        'prev': response.data.previous,
        'next': response.data.next, 
        'pg': response.data.current_page_number,
        'tot': response.data.total_pages,
      })
  },
  postCriarRequest ({ rootGetters }, params) {
    let url = process.env.VUE_APP_API_URL + '/requests/'
    let response = axios
      .post(url, params,
        { headers: rootGetters['account/getAuthHeader'], },
      )
      return response
  },
  async patchEditarRequests ({ rootGetters }, { id, params } ) {
    let url = process.env.VUE_APP_API_URL + '/requests/' + id + '/'
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
