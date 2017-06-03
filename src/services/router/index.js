import Vue from 'vue'
import Router from 'vue-router'
import ProdTools from 'views/app/prod-tools'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProdTools',
      component: ProdTools
    }
  ]
})
