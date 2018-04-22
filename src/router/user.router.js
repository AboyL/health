import Login from 'views/user/Login'
import Register from 'views/user/Register'
import ForgetPass from 'views/user/ForgetPass'

export default [
  {
    path: '/login',
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
