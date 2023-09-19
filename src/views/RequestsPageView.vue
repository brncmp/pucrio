<template>
  <div>
    <AppNav />
    <v-main>
      <RequestsPage />
    </v-main>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import AppNav from '../components/AppNav';
import RequestsPage from '../components/RequestsPage.vue';

export default {
  components: {
    AppNav,
    RequestsPage,
  },

  computed: mapState([

  ]),
};
</script>
