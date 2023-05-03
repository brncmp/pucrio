<template>
  <div>
    <AppNav />
    <v-main>
      <StorePage />
    </v-main>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import AppNav from '../components/AppNav';
import StorePage from '../components/StorePage.vue';

export default {
  components: {
    AppNav,
    StorePage,
  },

  computed: mapState([

  ]),
};
</script>
