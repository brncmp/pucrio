<template>
  <v-container fluid>
    <v-row class="mt-n3">
      <v-col md6>
        <ProductsList />
      </v-col>
      <v-col md6>
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductsList from './ProductsList.vue'

export default {
  components: {
    ProductsList
  },
};
</script>
