<template>
  <div>
  </div>
</template>

<script>
export default {
  name: 'ShowModal',
  props: {
    origin: {
      type: String,
      default: ''
    },
    destination: {
      type: String,
      default: ''
    },
  },
  data () {
    return {
      response: null
    }
  },
  created () {
    this.init()
  },
  methods: {
    async init () {
      const axios = require('axios');

      const options = {
        method: 'GET',
        url: 'https://trueway-matrix.p.rapidapi.com/CalculateDrivingMatrix',
        params: {
            origins: this.origin,
            destinations: this.destination
        },
        headers: {
            'X-RapidAPI-Key': '0a94f25e98mshc827d27266e37a0p117dcdjsna0328a8fb9a3',
            'X-RapidAPI-Host': 'trueway-matrix.p.rapidapi.com'
        }
      };

        try {
            if(this.origin !== null && this.destination !== null) {
                const r = await axios.request(options);
                this.request = r.data;
            }
        } catch (error) {
            console.error(error);
        }
        
    },
  }
}
</script>