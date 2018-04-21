import Vue from 'vue'
import Router from 'vue-router'
import Login from 'views/user/Login'
import Register from 'views/user/Register'
import ForgetPass from 'views/user/ForgetPass'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/forgetPass',
      name: 'ForgetPass',
      component: ForgetPass
    }
  ]
})
