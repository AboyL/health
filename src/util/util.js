/*
 * @Author: L
 * @Date: 2018-04-21 15:53:51
 * @Last Modified by: L
 * @Last Modified time: 2018-05-14 00:23:17
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
  getUserInfo (data) {
    return this.request({
      url: 'user/getUserInfo',
      data: data
    })
  }

}
