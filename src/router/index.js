import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Contacts',
    component: () => import(/* webpackChunkName: "contacts" */ '../views/ContactList.vue')
  },
  {
    path: '/new-contact',
    name: 'NewContact',
    component: () => import(/* webpackChunkName: "NewContact" */ '../views/ContactForm.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "signup" */ '../views/Signup.vue')
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
