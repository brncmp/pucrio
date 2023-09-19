<template>
  <v-card>
    <v-card-title>
     <h5> Reports </h5>
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
      <div v-for="(s, i) in reports.reports" :key="i">
        <ReportsListItem :ReportsListItem="s">
        </ReportsListItem>
        <v-divider
          v-if="i + 1 < reports.reports.length"
          :key="i"
        ></v-divider>
      </div>
    </div>
    <v-card-actions>

      <v-btn text
        :disabled="reports.reports_prev === null"
        @click="fetchData(reports.reports_prev)"
      >
        <v-icon>mdi-chevron-left</v-icon> Anterior
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text
        :disabled="reports.reports_next === null"
        @click="fetchData(reports.reports_next)"
      >
        Próximo <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
import ReportsListItem from './ReportsListItem'

export default {
  components: {
    ReportsListItem
  },


  created () {
    this.fetchData()
  },

  data: () => ({
    loading: false
  }),

  computed: {
    ...mapState(['reports',]),
  },

  methods: {
    async fetchData (url) {
      this.loading = true
      await this.$store.dispatch('reports/getreports', url)
      this.loading = false
    },
  }
}
</script>
