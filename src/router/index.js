import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import TreatmentsView from '../views/TreatmentsView.vue'
import  BookNowView from '../views/BookNowView.vue'
import ContactView  from '../views/ContactView.vue'
import SignUpView from '@/views/SignUpView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/About',
    name: 'About',
    component: AboutView
  },
  {
    path: '/Treatments',
    name: 'Treatments',
    component: TreatmentsView
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUpView
  },
  {
    path: '/BookNow',
    name: 'BookNow',
    component: BookNowView
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: ContactView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
