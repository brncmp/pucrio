<template>
  <v-container fluid>
    <v-row class="mt-n3">
      <v-col md6>
        <StoreList />
      </v-col>
      <v-col md6>
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import StoreList from './StoreList.vue'

export default {
  components: {
    StoreList
  },
};
</script>
