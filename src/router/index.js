/*
 * @Author: L
 * @Date: 2018-04-21 15:56:32
 * @Last Modified by: L
 * @Last Modified time: 2018-04-21 16:34:01
 */
import Vue from 'vue'
import Router from 'vue-router'

import userRouter from './user.router'
import tabsRouter from './tabs.router'
Vue.use(Router)

let router = []
router = router.concat(userRouter, tabsRouter)
export default new Router({
  routes: router
})
