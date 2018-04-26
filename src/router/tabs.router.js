import Tabs from 'views/Tabs/Tabs'

export default [
  {
    path: '/',
    name: 'Tabs',
    component: Tabs,
    beforeEnter: (to, from, next) => {
      console.log('校验是否登录')
      if (localStorage.token) {
        next()
      } else {
        next('/login')
      }
    }
  }
]
