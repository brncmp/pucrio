<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on }">
      <v-list-item three-line v-on="on">
        <v-list-item-avatar>
          <v-icon large>mdi-store</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>
            {{ StoreListItem.id}}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ StoreListItem.name }}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            {{ StoreListItem.owner }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>
    <v-card>
      <v-card-title>
        Store
      </v-card-title>
      <v-card-text>
        <v-simple-table dense>
          <template v-slot:default>
            <tbody>
              <tr>
                <td>id</td>
                <td>{{ StoreListItem.id}}</td>
              </tr>
              <tr>
                <td>Nome</td>
                <td>{{ StoreListItem.name }}</td>
              </tr>
              <tr>
                <td>Endereço</td>
                <td>{{ StoreListItem.street + ' ,' + StoreListItem.number }}</td>
              </tr>
              <tr>
                <td>Criado em</td>
                <td>{{ StoreListItem.created_at }}</td>
              </tr>
              <tr>
                <td>Dono</td>
                <td>{{ StoreListItem.owner }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <div v-if="error" class="mt-1">
          <span class="ml-2 red--text">{{ error }}</span>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn depressed  class="ml-1" @click="dialog = false">Fechar</v-btn>
        <v-spacer></v-spacer>
        <v-overlay
          v-if="loading"
          absolute
          class="text-center">
          <v-progress-circular
            :size="20"
            indeterminate
          ></v-progress-circular>
        </v-overlay>
        <span v-else>
          <!-- <v-btn depressed color="success" @click="aprovarReport(StoreListItem.url)" :disabled="StoreListItem.status === 'AC'">Aprovar</v-btn>
          <v-btn depressed color="error" @click="negarReport(StoreListItem.url)" :disabled="StoreListItem.status === 'DN'" class="ml-2">Negar</v-btn> -->
          <!-- <v-btn depressed @click="retryReport(StoreListItem.url)">Tentar novamente</v-btn> -->
        </span>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import dateFmt from '../mixins/dateFmt'
import { mapState } from 'vuex'

export default {
  props: {
    StoreListItem: [Array, Object]
  },

  mixins: [dateFmt],

  computed: {
    ...mapState(['store',]),
  },

  data: () => ({
    dialog: false,
    loading: false,
    error: null
  }),

  methods: {
    /* async aprovarReport (url) {
      this.loading = true
      await this.$store.dispatch('reports/postAprovarReport', url).catch((e) => { this.error = e.response.data.detail })
      this.loading = false
    },

    async negarReport (url) {
      this.loading = true
      await this.$store.dispatch('reports/postNegarReport', url).catch((e) => { this.error = e.response.data.detail })
      this.loading = false
    },

    async retryReport (url) {
      this.loading = true
      await this.$store.dispatch('reports/postRetryReport', url).catch((e) => { this.error = e.response.data.detail })
      this.loading = false
    }, */
  },
};
</script>
