<template>
  <div>
    <p>click {{count}} times ,count is {{evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
  import {mapActions,mapGetters,mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['count']),
      ...mapGetters(['evenOrOdd']),
    },
    /*computed: {
        evenOrOdd () {
          return this.$store.getters.evenOrOdd
        }
     },*/
    methods : {
      ...mapActions(['increment','decrement','incrementIfOdd','incrementAsync']),
    }
    /*methods: {
      increment () {
        this.$store.dispatch('increment')
      },
      decrement () {
        this.$store.dispatch('decrement')
      },
      incrementIfOdd () {
        this.$store.dispatch('incrementIfOdd')
      },
      incrementAsync () {
        this.$store.dispatch('incrementAsync')
      },

    }*/
  }
</script>

<style>

</style>
