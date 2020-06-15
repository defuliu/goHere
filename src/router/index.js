import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import List from '@/pages/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

  ]
})
