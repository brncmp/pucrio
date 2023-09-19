<template>
  <div>
    <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on }">
        <v-list-item three-line v-on="on">
            <v-list-item-avatar>
            <v-icon large>mdi-store</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
            <v-list-item-title>
                {{ RequestsListItem.id}}
            </v-list-item-title>
            <v-list-item-title>
                {{ RequestsListItem.store_origin}}
            </v-list-item-title>
            <v-list-item-title>
                {{ RequestsListItem.customer_destination}}
            </v-list-item-title>
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
                    <td>{{ RequestsListItem.id}}</td>
                </tr>
                <tr>
                    <td>Store Origin</td>
                    <td>{{ RequestsListItem.store_origin}}</td>
                </tr>
                <tr>
                    <td>Customer destination</td>
                    <td>{{ RequestsListItem.customer_destination}}</td>
                </tr>
                </tbody>
            </template>
            </v-simple-table>
            <div v-if="error" class="mt-1">
            <span class="ml-2 red--text">{{ error }}</span>
            </div>
        </v-card-text>
        <v-card-actions>
            <!-- <v-btn depressed  class="ml-1" color="primary" @click="editarRequest(RequestsListItem.id)">Calcular rota</v-btn> -->
            <v-spacer></v-spacer>
            <v-btn depressed  class="ml-1" @click="dialog = false">Fechar</v-btn>
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
            <!-- <v-btn depressed color="success" @click="aprovarReport(RequestsListItem.url)" :disabled="RequestsListItem.status === 'AC'">Aprovar</v-btn>
            <v-btn depressed color="error" @click="negarReport(RequestsListItem.url)" :disabled="RequestsListItem.status === 'DN'" class="ml-2">Negar</v-btn> -->
            <!-- <v-btn depressed @click="retryReport(RequestsListItem.url)">Tentar novamente</v-btn> -->
            </span>
        </v-card-actions>
        </v-card>
    </v-dialog>
    <CalculateRoutes :origin="RequestsListItem.store_origin" :destination="RequestsListItem.customer_destination" />
  </div>
</template>

<script>
import dateFmt from '../mixins/dateFmt'
import { mapState } from 'vuex'
import CalculateRoutes from '../components/CalculateRoutes.vue'

export default {
  props: {
    RequestsListItem: [Array, Object]
  },
  components: {
    CalculateRoutes
  },

  mixins: [dateFmt],

  computed: {
    ...mapState(['requests',]),
  },

  data: () => ({
    dialog: false,
    loading: false,
    error: null
  }),

  methods: {
    async editarRequest (id) {
      this.loading = true
      let params = {
        customer_destination: this.RequestsListItem.customer_destination, store_origin: this.RequestsListItem.store_origin
      }
      await this.$store.dispatch('requests/patchEditarRequests', { id, params })
      /* this.$emit('emitGetUsers') */
      this.dialog = false
      this.editarUserDialog = false
    },
  },
};
</script>
