// tailwind css
import './assets/tailwind.css'
// fontawesome 5
import './assets/fontawesome5/css/all.min.css'

import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';

import Vrouter from 'vue-router'
import { myroutes } from './routes.js'

// add store to mainjs
import store from './store/store'

Vue.config.productionTip = false

// use router
Vue.use(Vrouter);
Vue.use(VueResource);

// access firebase with vueresource
Vue.http.options.root = 'https://vue-stocktrader-564e5.firebaseio.com/';

const myrouter = new Vrouter({
  mode: 'history',
  routes : myroutes
});

new Vue({
  render: h => h(App),
  router : myrouter,
  store
}).$mount('#app')
