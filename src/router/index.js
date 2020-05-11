import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/experience',
    name: 'Experience',
    component: () => import('../views/Experience.vue')
  },
  {
    path: '/study',
    name: 'Study',
    component: () => import('../views/Temporal.vue')
  },
  {
    path: '/additionalEducation',
    name: 'AdditionalEducation',
    component: () => import('../views/Temporal.vue')
  },
  {
    path: '/skills',
    name: 'Skills',
    component: () => import('../views/Temporal.vue')
  },
  {
    path: '/recommendations',
    name: 'Recommendations',
    component: () => import('../views/Temporal.vue')
  },
  {
    path: '/temporal',
    name: 'Temporal',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Temporal.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
