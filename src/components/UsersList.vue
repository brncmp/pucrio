<template>
  <div>

    <v-card>
      <v-card-title>
      <h5> Users </h5>
        <v-spacer></v-spacer>
      </v-card-title>
      <v-overlay
        v-if="loading"
        absolute
        class="text-center">
        <v-progress-circular
          indeterminate
        ></v-progress-circular>
      </v-overlay>
      <div>
        <div v-for="(u, i) in users.users" :key="i">
          <UsersListItem :UsersListItem="u" @emitGetUsers="fetchData()">
          </UsersListItem>
          <v-divider
            v-if="i + 1 < users.users.length"
            :key="i"
          ></v-divider>
        </div>
      </div>
      <v-card-actions>

        <v-btn text
          :disabled="users.users_prev === null"
          @click="fetchData(users.users_prev)"
        >
          <v-icon>mdi-chevron-left</v-icon> Anterior
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn text
          :disabled="users.users_next === null"
          @click="fetchData(users.users_next)"
        >
          Próximo <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-card-actions>
      <v-card-actions>
          <v-spacer></v-spacer>
          <v-dialog v-model="criarUserDialog" max-width="600px">
            <v-card>
              <v-card-title>
                Criar user
              </v-card-title>
              <v-card-text>
                <template>
                  <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
                  >
                  <v-text-field
                      v-model="first_name"
                      label="Primeiro nome"
                      required
                  ></v-text-field>

                  <v-text-field
                      v-model="last_name"
                      label="Sobrenome"
                      required
                  ></v-text-field>


                  <v-text-field
                      v-model="date_of_birth"
                      label="Data de nascimento (YYYY-MM-DD)"
                      required
                  ></v-text-field>

                  <v-text-field
                      v-model="gender"
                      label="Gênero"
                      required
                  ></v-text-field>

                  <v-text-field
                      v-model="roles"
                      label="Roles"
                      required
                  ></v-text-field>

                  <v-text-field
                      v-model="email"
                      label="email"
                      required
                  ></v-text-field>

                  </v-form>
                </template>
              </v-card-text>
              <v-card-actions>
                  <v-btn text class="ml-2" @click="criarUserDialog = false">Fechar</v-btn>
                  <v-spacer></v-spacer>
                  <v-overlay
                      v-if="loading"
                      absolute
                      class="text-center">
                      <v-progress-circular
                      :size="20"
                      indeterminate
                      ></v-progress-circular>
                  </v-overlay>
                  <span v-else>
                      <v-btn depressed color="primary" @click="criarUser()">Confirmar</v-btn>
                  </span>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card-actions>
    </v-card>
    <div class="mt-2">
      <v-btn depressed color="primary" @click="criarUserDialog = true">Criar user</v-btn>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import UsersListItem from './UsersListItem'

export default {
  components: {
    UsersListItem
  },


  created () {
    this.fetchData()
  },

  data: () => ({
    loading: false,
    criarUserDialog: false,
    first_name: null,
    last_name: null,
    date_of_birth: null,
    roles: null,
    email: null,
    gender: null,
    editarUserDialog: false,
    valid: true
  }),

  computed: {
    ...mapState(['users',]),
  },

  methods: {
    async fetchData (url) {
      this.loading = true
      await this.$store.dispatch('users/getusers', url)
      this.loading = false
    },
    async criarUser () {
      this.loading = true
      let params = {
        first_name: this.first_name, last_name: this.last_name,
        date_of_birth: this.date_of_birth, roles: this.roles,
        email: this.email, gender: this.gender
      }
      await this.$store.dispatch('users/postCriarUser', params)
      this.loading = false
      this.editarUserDialog = false
      this.criarUserDialog = false
      this.fetchData()
    },
  }
}
</script>
