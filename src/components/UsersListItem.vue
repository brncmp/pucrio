<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on }">
      <v-list-item three-line v-on="on">
        <v-list-item-avatar>
          <v-icon large>mdi-account</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>
            {{ UsersListItem.id}}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ UsersListItem.first_name + ' ' + UsersListItem.last_name }}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            {{ UsersListItem.email }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>
    <v-card>
      <v-card-title>
        User
      </v-card-title>
      <v-card-text>
        <v-simple-table dense>
          <template v-slot:default>
            <tbody>
              <tr>
                <td>id</td>
                <td>{{ UsersListItem.id}}</td>
              </tr>
              <tr>
                <td>Nome</td>
                <td>{{ UsersListItem.first_name + ' ' + UsersListItem.last_name }}</td>
              </tr>
              <tr>
                <td>Horário de Criação</td>
                <td>{{ UsersListItem.created_at}}</td>
              </tr>
              <tr>
                <td>Data de nascimento</td>
                <td>{{ UsersListItem.date_of_birth }}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{{ UsersListItem.email }}</td>
              </tr>
              <tr>
                <td>Roles</td>
                <td>{{ UsersListItem.roles }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <div v-if="error" class="mt-1">
          <span class="ml-2 red--text">{{ error }}</span>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn text class="ml-2" @click="dialog = false">Fechar</v-btn>
        <v-spacer></v-spacer>
        <v-btn class="ml-2" color="red white--text" @click="deleteUser(UsersListItem.id)">Deletar</v-btn>
        <v-btn class="ml-2" color="primary" @click="editar(UsersListItem.id)">Editar</v-btn>
        <v-dialog v-model="editarUserDialog" max-width="600px">
          <v-card>
            <v-card-title>
              User: {{ UsersListItem.first_name }}
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
                    label="Data de nascimento"
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
                <v-btn text class="ml-2" @click="editarUserDialog = false">Fechar</v-btn>
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
                    <v-btn depressed color="primary" @click="editarUser(UsersListItem.id)">Confirmar</v-btn>
                </span>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import dateFmt from '../mixins/dateFmt'
import { mapState } from 'vuex'

export default {
  props: {
    UsersListItem: [Array, Object]
  },

  mixins: [dateFmt],

  computed: {
    ...mapState(['users',]),
  },

  data: () => ({
    dialog: false,
    loading: false,
    error: null,
    first_name: null,
    last_name: null,
    date_of_birth: null,
    roles: null,
    email: null,
    gender: null,
    editarUserDialog: false,
    valid: true
  }),

  methods: {
    async editar (id) {
      this.editarUserDialog = true
      await this.$store.dispatch('users/getUserById', id).then((r) => {
        this.first_name = r.data.first_name
        this.last_name = r.data.last_name
        this.date_of_birth = r.data.date_of_birth
        this.roles = r.data.roles
        this.gender = r.data.gender
        this.email = r.data.email
      })
    },
    async editarUser (id) {
      this.loading = true
      let params = {
        first_name: this.first_name, last_name: this.last_name,
        date_of_birth: this.date_of_birth, roles: this.roles,
        email: this.email, gender: this.gender
      }

      await this.$store.dispatch('users/patchEditarUser', { id, params })
      this.$emit('emitGetUsers')
      this.dialog = false
      this.editarUserDialog = false
    },
    async deleteUser (id) {
      await this.$store.dispatch('users/deleteUser', { id})
      this.$emit('emitGetUsers')
    },
  },
};
</script>
