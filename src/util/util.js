/*
 * @Author: L
 * @Date: 2018-04-21 15:53:51
 * @Last Modified by: L
 * @Last Modified time: 2018-04-28 21:54:58
 */

import axios from 'axios'
import { Message, Loading } from 'element-ui'
import router from '../router/index.js'

export default{
  request ({ method = 'post', url, data }) {
    let loadingInstance = Loading.service({
      text: '加载中'
    })
    return axios({
      url: url,
      method: method,
      data: data,
      // baseURL: 'http://localhost:8080/api' //test
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
  warningMessage ({message, duration = 1000}) {
    Message({
      message,
      duration,
      type: 'warning'
    })
  },
  successMessage ({message, onClose = () => {}}, duration = 1000) {
    Message({
      message,
      duration,
      type: 'success',
      onClose
    })
  },
  goLogin () {
    localStorage.token = ''
    router.push({name: 'Login'})
  },
  goTabs () {
    router.push({name: 'Tabs'})
  },
  loginOut () {
    this.goLogin()
  }

}
