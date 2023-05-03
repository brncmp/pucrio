export default {
  methods: {
    formattedDate: function(timestamp) {
      if(!timestamp) {
        return '-'
      }
      let d = new Date(timestamp)
      return d.toLocaleString('pt-BR')
    },
    formattedTime: function(timestamp) {
      if(!timestamp) {
        return '-'
      }
      let t = new Date(timestamp)
      return t.toLocaleTimeString('pt-BR')
    },
  },
}
