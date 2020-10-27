import Vue from 'vue'
import App from './App.vue'

// tailwind css
import './assets/tailwind.css'

// fontawesome 5
import './assets/fontawesome5/css/all.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
