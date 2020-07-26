import Vue from 'vue'
import Router from 'vue-router'
import SingleBezier from './views/SingleBezier.vue'
import ConnectingConstraint from './views/ConnectingConstraint.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: SingleBezier
    },
    {
      path: '/connectingConstraint',
      name: 'connectingConstraint',
      component: ConnectingConstraint
    }
  ]
})
