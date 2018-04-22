/*
 * @Author: L
 * @Date: 2018-04-21 15:55:24
 * @Last Modified by: L
 * @Last Modified time: 2018-04-22 19:40:47
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import './style/index.scss'
import './style/svgIcon.js'
import 'style/border.css'
import 'style/reset.css'
import 'style/reset-el.scss'
import 'animate.css'

import './mock/mock.js'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 使用element
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
