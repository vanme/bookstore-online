import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Category from '@/pages/category/Category'
import Cart from '@/pages/cart/Cart'
import Me from '@/pages/me/Me'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component:Home
    },
    {
      path: '/category',
      name: 'Category',
      component:Category
    },
    {
      path: '/cart',
      name: 'Cart',
      component:Cart
    },
    {
      path: '/me',
      name: 'Me',
      component:Me
    }

  ],
  linkActiveClass:'active'
})
