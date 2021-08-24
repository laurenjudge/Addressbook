import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Contacts',
    component: () => import(/* webpackChunkName: "Contacts" */ '../views/ContactList.vue')
  },
  {
    path: '/new-contact',
    name: 'NewContact',
    component: () => import(/* webpackChunkName: "NewContact" */ '../views/ContactCreate.vue')
  },
  {
    path: '/edit-contact/:id',
    name: 'EditContact',
    component: () => import(/* webpackChunkName: "EditContact" */ '../views/ContactEdit.vue')
  },
  {
    path: '/view-contact/:id',
    name: 'ViewContact',
    component: () => import(/* webpackChunkName: "ViewContact" */ '../views/ContactView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "Signup" */ '../views/Signup.vue')
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
