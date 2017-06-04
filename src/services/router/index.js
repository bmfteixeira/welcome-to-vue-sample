import Vue from 'vue'
import Router from 'vue-router'
import ProdTools from 'views/app/prod-tools'
import Profile from 'views/app/profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProdTools',
      component: ProdTools
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
