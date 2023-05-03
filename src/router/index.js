import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomePageView.vue'
import Store from '../views/StorePageView.vue'
import Products from '../views/ProductsPageView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/store',
    name: 'store',
    component: Store
  },
  {
    path: '/products',
    name: 'products',
    component: Products
  }
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
