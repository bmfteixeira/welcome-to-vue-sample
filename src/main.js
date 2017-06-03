import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'

import App from 'views/app/app'
import router from 'services/router'
import store from 'services/store'

/* ------------------------------------------------------
 * The official router for Vue.js
 * - http://router.vuejs.org/
 * --------------------------------------------------- */
Vue.use(Router)
Vue.router = router

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
