/*
 * @Author: L
 * @Date: 2018-04-21 15:56:32
 * @Last Modified by: L
 * @Last Modified time: 2018-05-17 14:44:08
 */
import Vue from 'vue'
import Router from 'vue-router'

import userRouter from './user.router'
import tabsRouter from './tabs.router'
import hospitalRouter from './hospital.router'
import knowledgeRouter from './knowledge.router'
Vue.use(Router)

let router = []
router = router.concat(userRouter, tabsRouter, hospitalRouter, knowledgeRouter)
export default new Router({
  routes: router
})
