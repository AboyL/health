/*
 * @Author: L
 * @Date: 2018-04-21 15:53:51
 * @Last Modified by: L
 * @Last Modified time: 2018-05-21 16:08:04
 */

import axios from 'axios'
import { Message, Loading } from 'element-ui'
import router from '../router/index.js'
import store from '../store/index'
export default {
  request ({ method = 'post', url, data }) {
    let loadingInstance = Loading.service({
      text: '加载中'
    })
    return axios({
      url: url,
      method: method,
      data: data,
      // baseURL: 'http://localhost:8080/api' // test
      baseURL: 'http://localhost:2333/api' // prod
    })
      .then((result) => {
        return result.data
      }).catch((err) => {
        return err
      }).finally(() => {
        loadingInstance.close()
      })
  },
  warningMessage ({ message, duration = 1000 }) {
    Message({
      message,
      duration,
      type: 'warning'
    })
  },
  successMessage ({ message, onClose = () => { } }, duration = 1000) {
    Message({
      message,
      duration,
      type: 'success',
      onClose
    })
  },
  goLogin () {
    store.commit('clearToken')
    router.push({ name: 'Login' })
  },
  goTabs () {
    router.push({ name: 'Tabs' })
  },
  loginOut () {
    this.goLogin()
  },
  getUserInfo ({ username }) {
    return this.request({
      url: 'user/getUserInfo',
      data: {
        username
      }
    })
  },
  getFormatDate: (date) => {
    if (date instanceof Date) {
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      let day = date.getDate()
      let hour = date.getHours()
      let minute = date.getMinutes()
      let seconds = date.getSeconds()
      let formatTime = `${year}-${month}-${day} ${hour}:${minute}:${seconds}`
      console.log('format---------data')
      console.log(formatTime)
      return formatTime
    } else {
      throw Error('非日期类型')
    }
  },
  getFormatDay: (date, difference) => {
    if (date instanceof Date) {
      if (difference) {
        date.setTime(date.getTime() + difference * 24 * 60 * 60 * 1000)
      }
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      let day = date.getDate()
      let formatTime = `${year}-${month}-${day}`
      return formatTime
    } else {
      throw Error('非日期类型')
    }
  },
  deepCopy: (obj) => {
    let str = obj.constructor === Array ? [] : {}
    let newobj = obj.constructor === Array ? [] : {}
    if (typeof obj !== 'object') {
      return
    } else if (window.JSON) {
      str = JSON.stringify(obj) // 系列化对象
      newobj = JSON.parse(str) // 还原
    } else {
      for (var i in obj) {
        newobj[i] = typeof obj[i] === 'object'
          ? this.deepCopy(obj[i]) : obj[i]
      }
    }
    return newobj
  }

}
