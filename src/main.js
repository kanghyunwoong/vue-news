import Vue from 'vue'
import App from './App.vue'
import {router} from './routes/index.js'
import {store} from './store/index'
import CustomAlert from './plugin/alertPlugin'

Vue.config.productionTip = false
Vue.use(CustomAlert);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
