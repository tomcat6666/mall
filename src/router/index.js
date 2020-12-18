import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Jin from '../views/Jin.vue'

import Carts from '../components/Carts.vue'
import Goods from '../components/Goods.vue'
Vue.use(VueRouter)

const routes = [

  {
    path: "/home",
    component: Home
  },
  {
    path: "/jin",
    component: Jin
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/login/:id",
    component: Login
  },
  {
    path: "/cart",
    component: Carts
  },
  {
    path: "/goods",
    component: Goods
  },

]

const router = new VueRouter({
  routes
})

export default router
