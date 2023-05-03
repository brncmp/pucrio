<template>
  <div>
    <AppNav />
    <v-main>
      <HomePage />
    </v-main>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import AppNav from '../components/AppNav';
import HomePage from '../components/HomePage';

export default {
  components: {
    AppNav,
    HomePage,
  },

  computed: mapState([
  ]),
};
</script>
