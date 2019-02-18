import Vue from 'vue'
import Router from 'vue-router'
import mineRouter from './mineRouter'
import catefullyRouter from './carefullyRouter'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    mineRouter,
    catefullyRouter,
    {
      path:'/',
      redirect:'/catefully'
    }
  ]
})
