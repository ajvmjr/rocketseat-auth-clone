import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/pages/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "signup" */ '@/pages/Signup')
  },
  {
    path: '/authenticated',
    name: 'authenticated',
    component: () => import(/* webpackChunkName: "authenticated" */ '@/pages/Authenticated')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
