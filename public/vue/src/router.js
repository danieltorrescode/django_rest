import Vue from 'vue'
import Router from 'vue-router'
import Auth from './views/auth/routes/index'
import Home from './views/home/routes/index'

import Tasks from './views/tasks/routes/index'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...Auth,
    ...Tasks,
    ... Home,
  ]
})

// Global Guard
router.beforeEach((to, from, next) => {
    let allowed = [
        'signup',
        'login',
        'home',
        'error',
    ]

    if(
        allowed.indexOf(to.name) == -1 &&
        localStorage.getItem("token") == null
    ){
        next({ path: '/login' })
    }else{
        next()
    }
 })

export default router 
