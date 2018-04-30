import Tabs from 'views/Tabs/Tabs'

export default [
  {
    path: '/',
    name: 'Tabs',
    component: Tabs,
    beforeEnter: (to, from, next) => {
      if (localStorage.token) {
        next()
      } else {
        next('/login')
      }
    }
  }
]
