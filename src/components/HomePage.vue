<template>
  <v-container fluid>
    <v-row class="mt-n3">
      <v-col md6>
        <UsersList />
      </v-col>
      <v-col md6>
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UsersList from './UsersList.vue'

export default {
  components: {
    UsersList
  },
};
</script>
