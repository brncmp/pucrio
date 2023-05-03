<template>
  <v-card>
    <v-card-title>
     <h5> Products </h5>
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
      <div v-for="(s, i) in products.products" :key="i">
        <ProductsListItem :ProductsListItem="s">
        </ProductsListItem>
        <v-divider
          v-if="i + 1 < products.products.length"
          :key="i"
        ></v-divider>
      </div>
    </div>
    <v-card-actions>

      <v-btn text
        :disabled="products.products_prev === null"
        @click="fetchData(products.products_prev)"
      >
        <v-icon>mdi-chevron-left</v-icon> Anterior
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text
        :disabled="products.products_next === null"
        @click="fetchData(products.products_next)"
      >
        Próximo <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
import ProductsListItem from './ProductsListItem'

export default {
  components: {
    ProductsListItem
  },


  created () {
    this.fetchData()
  },

  data: () => ({
    loading: false
  }),

  computed: {
    ...mapState(['products',]),
  },

  methods: {
    async fetchData (url) {
      this.loading = true
      await this.$store.dispatch('products/getproducts', url)
      this.loading = false
    },
  }
}
</script>
