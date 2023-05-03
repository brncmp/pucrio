<template>
  <div>
    <AppNav />
    <v-main>
      <ProductsPage />
    </v-main>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import AppNav from '../components/AppNav';
import ProductsPage from '../components/ProductsPage.vue';

export default {
  components: {
    AppNav,
    ProductsPage,
  },

  computed: mapState([

  ]),
};
</script>
