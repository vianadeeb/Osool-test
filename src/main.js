import Vue from 'vue'
// import './plugins/axios'
import './plugins/bootstrap-vue'
import router from './router'
// import store from './store'
import  './assets/css/main.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  // store,
  render: h => h("router-view")
}).$mount('#app')
