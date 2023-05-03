<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list>
        <template>
          <v-list-item to="/">
            <v-list-item-action>
              <v-icon>mdi-account</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Users</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/store">
            <v-list-item-action>
              <v-icon>mdi-store</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Store</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/products">
            <v-list-item-action>
              <v-icon>mdi-food-apple</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Products</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
        <v-list-item>
          <v-list-item-content class="mt-1 text-sm-center font-weight-light">
            <p>© 2023 Front</p>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      fixed
      clipped-left
      clipped-right
      :color="barColor"
      >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <v-icon large color="deep-purple darken-4">mdi-bank-transfer</v-icon> FRONT <span v-if="!inProd">(HOMOLOGAÇÃO)</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>

      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
import { mapState } from 'vuex'


export default {
  components: {
  },


  computed: {
    ...mapState(['',]),
    inProd: function () {
      return process.env.VUE_APP_API_URL == 'https://frontprod/api'
    },
    barColor: function () {
      if (this.inProd) {
        return null
      } else {
        return "purple lighten-4"
      }
    },
  },

  data() {
    return {
      drawer: null,
    }
  },

  methods: {
  },
}
</script>
