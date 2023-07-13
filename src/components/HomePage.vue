<template>
  <v-container fluid>
    <v-row class="mt-n3">
      <v-col md6>
        <UsersList />
      </v-col>
      <v-col class="w-100" md6>
      <Modal 
        title="Bem-vindo!"
        :items="discount_type"
        button="Cupom do mês"
        modalType="div"
        class="float-right"
      />
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UsersList from './UsersList.vue'
import Modal from '../components/Modal.vue'

export default {
  components: {
    UsersList, Modal
  },
  computed: {
    discount_type () {
      const month = new Date().getMonth()
        if (month % 2 === 0) {
        return this.mensagem.text
      } else {
         return this.mensagem.text2
      }
    }
  },
  data: () => ({
    mensagem: {
            "text": "Olá, hoje o seu acesso te oferece um cupom de 15% de desconto em nossos produtos. Acesse nosso instagram e veja o cupom disponível hoje! @brncmp",
            "text2": "Olá, hoje o seu acesso te oferece um cupom de 20% de desconto em nossos produtos. Acesse nosso instagram e veja o cupom disponível hoje! @brncmp"
        },
    
  }),
};
</script>
