import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './base.css'
import router from 'vue-router'

/*new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  store

})*/


new Vue({
  el: '#app',
  render: h => h(App),
  store

})
