import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import './assets/fontawesome5/css/all.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
