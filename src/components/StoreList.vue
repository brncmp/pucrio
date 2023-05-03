<template>
  <v-card>
    <v-card-title>
     <h5> Store </h5>
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
      <div v-for="(s, i) in store.store" :key="i">
        <StoreListItem :StoreListItem="s">
        </StoreListItem>
        <v-divider
          v-if="i + 1 < store.store.length"
          :key="i"
        ></v-divider>
      </div>
    </div>
    <v-card-actions>

      <v-btn text
        :disabled="store.store_prev === null"
        @click="fetchData(store.store_prev)"
      >
        <v-icon>mdi-chevron-left</v-icon> Anterior
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text
        :disabled="store.store_next === null"
        @click="fetchData(store.store_next)"
      >
        Próximo <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
import StoreListItem from './StoreListItem'

export default {
  components: {
    StoreListItem
  },


  created () {
    this.fetchData()
  },

  data: () => ({
    loading: false
  }),

  computed: {
    ...mapState(['store',]),
  },

  methods: {
    async fetchData (url) {
      this.loading = true
      await this.$store.dispatch('store/getstore', url)
      this.loading = false
    },
  }
}
</script>
