import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Colors.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', redirect:'/red',
    name: 'Home',
    component: Home
  },
  {
    path: '/:color',
    name: 'Color',
    component: () => import('../views/Colors.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
