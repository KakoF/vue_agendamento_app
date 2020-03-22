import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Agendar from '../views/Agendar.vue'
import AppBar from '../template/AppBar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    // component: Home
    components: { app: AppBar, default: Home }
  },
  {
    path: '/agendar',
    name: 'Agendar',
    // component: Home
    components: { app: AppBar, default: Agendar }
  },
  {
    path: '/login',
    name: 'Login',
    // component: Home
    components: { app: AppBar, default: Login }
  }
  // {
  //  path: '/about',
  //  name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
