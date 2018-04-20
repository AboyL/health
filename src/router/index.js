import Vue from 'vue'
import Router from 'vue-router'
import Login from 'views/login/Login'
import Register from 'views/login/Register'
import ForgetPass from 'views/login/ForgetPass'


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
