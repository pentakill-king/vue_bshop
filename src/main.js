import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './vuex/store'
import Vuex from 'vuex'
import { request } from '@/api/api' 


Vue.use(Vuex)

axios.defaults.baseURL = '/x'

Vue.config.productionTip = false

Vue.prototype.request=request


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
