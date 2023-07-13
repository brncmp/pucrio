<template>
  <div>
    <v-dialog v-if="modalType === 'list'"
        transition="dialog-bottom-transition"
        max-width="600"
    >
        <template v-slot:activator="{ on, attrs }">
        <v-btn
            class="my-1"
            small
            v-bind="attrs"
            v-on="on"
        >{{ button }}</v-btn>
        </template>
        <template v-slot:default="dialog">
        <v-card>
            <v-toolbar
            color="primary"
            dark
            >{{ title }}</v-toolbar>
            <v-card-text class="mt-3">
            <div class="text pt-1">
                <ul v-for="(item, i) in items" :key="i">
                    <li>{{ item }}</li>
                </ul>
            </div>
            </v-card-text>
            <v-card-actions class="justify-end">
            <v-btn
                text
                @click="dialog.value = false"
            >Close</v-btn>
            </v-card-actions>
        </v-card>
        </template>
    </v-dialog>
    <v-dialog v-else
        transition="dialog-bottom-transition"
        max-width="600"
    >
        <template v-slot:activator="{ on, attrs }">
        <v-btn
            class="my-1"
            small
            v-bind="attrs"
            v-on="on"
        >{{ button }}</v-btn>
        </template>
        <template v-slot:default="dialog">
        <v-card>
            <v-toolbar
            color="primary"
            dark
            >{{ title }}</v-toolbar>
            <v-card-text class="mt-3">
            <div class="text pt-1">
                <div>{{ items }}</div>
            </div>
            </v-card-text>
            <v-card-actions class="justify-end">
            <v-btn
                text
                @click="dialog.value = false"
            >Close</v-btn>
            </v-card-actions>
        </v-card>
        </template>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'ShowModal',
  props: {
    items: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: ''
    },
    button: {
      type: String,
      default: 'Mostrar'
    },
    modalType: { 
    type: String,
    default: 'list'
    }
  },
  data () {
    return {
    }
  },
}
</script>