import axios from 'axios'

const state = {
  reports: [],
  reports_prev: null,
  reports_next: null,
  reports_pg: null,
  reports_tot_pgs: null,
  reports_data: {}
}

const getters = {
  /* getURL: (state) => (pedido) => {
    return state.reports.find(p => p.pedido === pedido)
  }, */
}

const mutations = {
  clear_reports (state) {
    state.reports = []
    state.reports_prev = null
    state.reports_next = null
    state.reports_pg = null
    state.reports_tot_pgs = null
    state.reports_data = {}
  },

  set_reports (state, { results, prev, next, pg, tot }) {
    state.reports = results
    state.reports_prev = prev
    state.reports_next = next
    state.reports_pg = pg
    state.reports_tot_pgs = tot
  },

  /* add_reports (state, result) {
    let idx = state.reports.findIndex(op => op.id === result.id)
    if (idx !== -1) {
      state.reports.splice(idx, 1, result)
    } else {
      state.reports.push(result)
    }
  },

  add_data (state, { key, data }) {
    state.reports_data[key] = data
  } */
}

const actions = {
  async getreports ({ commit, rootGetters }, url) {
    if (!url) {
      url = process.env.VUE_APP_API_URL + '/reports/'
    }

    let response = await axios
      .get(url,
        { headers: rootGetters['account/getAuthHeader'], },
      )

      await commit('set_reports', {
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
