import Vue from 'vue'
import App from './App.vue';
import Home from './Component/Home.vue'

Vue.component('server-status',Home)
new Vue({
  el: '#app',
  render: h => h(App)
})
