import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueCookie from 'vue-cookie'
import Vuelidate from 'vuelidate'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueCookie)
Vue.use(Vuelidate)
Vue.config.productionTip = false

import '@/assets/css/style.scss'

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    this.$store.commit('loadCookies')
  }
}).$mount('#app')
