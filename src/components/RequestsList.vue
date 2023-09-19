<template>
  <div>
    
    <v-card>
      <v-card-title>
      <h5> Requests </h5>
        <v-spacer></v-spacer>
      </v-card-title>
      <v-overlay
        v-if="loading"
        absolute
        class="text-center">
        <v-progress-circular
          indeterminate
        ></v-progress-circular>
      </v-overlay>
      <div>
        <div v-for="(s, i) in requests.requests" :key="i">
          <RequestsListItem :RequestsListItem="s">
          </RequestsListItem>
          <v-divider
            v-if="i + 1 < requests.requests.length"
            :key="i"
          ></v-divider>
        </div>
      </div>
      <v-card-actions>

        <v-btn text
          :disabled="requests.requests_prev === null"
          @click="fetchData(requests.requests_prev)"
        >
          <v-icon>mdi-chevron-left</v-icon> Anterior
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn text
          :disabled="requests.requests_next === null"
          @click="fetchData(requests.requests_next)"
        >
          Próximo <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <div class="mt-2">
      <v-btn depressed color="primary" @click="criarRequest">Criar</v-btn>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import RequestsListItem from './RequestsListItem'

export default {
  components: {
    RequestsListItem
  },


  created () {
    this.fetchData()
  },

  data: () => ({
    loading: false,
    customer_destination: null,
    store_origin: null,
    store: null
  }),

  computed: {
    ...mapState(['requests',]),
  },

  methods: {
    async fetchData (url) {
      this.loading = true
      await this.$store.dispatch('requests/getrequests', url)
      this.loading = false
    },
    async criarRequest () {
      this.loading = true
      let params = {
        customer_destination: this.customer_destination, store_origin: this.store_origin,
        store: 'teste'
      }
      await this.$store.dispatch('requests/postCriarRequest', params)
      this.loading = false
      this.editarUserDialog = false
      this.criarUserDialog = false
      this.fetchData()
    },
  }
}
</script>
