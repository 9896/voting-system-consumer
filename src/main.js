import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Echo from 'laravel-echo'

import Axios from 'axios'
Vue.prototype.$axios = Axios

import store from './store'

window.Pusher = require('pusher')

Vue.config.productionTip = false

/**
 * This function globally registers a route guard ensuring only Logged in Users access the system
 */
// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' && store.getters.getAccessToken == false) next({ name: 'Login' })
//   else next()
// })

window.Echo = new Echo({
  broadcaster: 'pusher',
  key: 'thekey1',
  cluster: 'mt1',//don't seem necessary(dsn)~
  forceTLS: false,//true,dsnsss~
  wsHost: 'http://127.0.0.1:8002', //added
  wsPort: 6001,//added
  disableStats: true,//added
  //scheme: process.env.MIX_PUSHER_SCHEME//added
  });
  

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
