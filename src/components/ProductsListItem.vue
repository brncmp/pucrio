<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on }">
      <v-list-item three-line v-on="on">
        <v-list-item-avatar>
          <v-icon large>mdi-food-apple</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>
            {{ ProductsListItem.id}}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ ProductsListItem.store }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>
    <v-card>
      <v-card-title>
        Products
      </v-card-title>
      <v-card-text>
        <v-simple-table dense>
          <template v-slot:default>
            <tbody>
              <tr>
                <td>id</td>
                <td>{{ ProductsListItem.id}}</td>
              </tr>
              <tr>
                <td>Loja</td>
                <td>{{ ProductsListItem.store}}</td>
              </tr>
              <tr>
                <td>Bebidas</td>
                <td>
                  <Modal 
                    title="Bebidas"
                    :items="ProductsListItem.drinks"
                    button="Mostrar"
                  />
                </td>
              </tr>
              <tr>
                <td>Comidas</td>
                <td>
                  <Modal 
                    title="Comidas"
                    :items="ProductsListItem.foods"
                    button="Mostrar"
                  />
                </td>
              </tr>
              <tr>
                <td>Criado em</td>
                <td>{{ ProductsListItem.created_at }}</td>
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
          <!-- <v-btn depressed color="success" @click="aprovarReport(ProductsListItem.url)" :disabled="ProductsListItem.status === 'AC'">Aprovar</v-btn>
          <v-btn depressed color="error" @click="negarReport(ProductsListItem.url)" :disabled="ProductsListItem.status === 'DN'" class="ml-2">Negar</v-btn> -->
          <!-- <v-btn depressed @click="retryReport(ProductsListItem.url)">Tentar novamente</v-btn> -->
        </span>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import dateFmt from '../mixins/dateFmt'
import { mapState } from 'vuex'
import Modal from '../components/Modal.vue'

export default {
  props: {
    ProductsListItem: [Array, Object]
  },

  components: {
    Modal
  },

  mixins: [dateFmt],

  computed: {
    ...mapState(['products',]),
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
