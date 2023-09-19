<template>
  <v-container fluid>
    <v-row class="mt-n3">
      <v-col md6>
        <RequestsList />
      </v-col>
      <v-col md6>
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import RequestsList from './RequestsList.vue'

export default {
  components: {
    RequestsList
  },
};
</script>
