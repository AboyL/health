/*
 * @Author: L
 * @Date: 2018-04-21 15:53:51
 * @Last Modified by: L
 * @Last Modified time: 2018-04-21 16:35:17
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
      baseURL: 'http://localhost:8080/api'
    })
      .then((result) => {
        return result.data
      }).catch((err) => {
        return err
      }).finally(() => {
        loadingInstance.close()
      })
  },
  warningMessage ({message}) {
    Message({
      message,
      type: 'warning'
    })
  },
  successMessage ({message, onClose = () => {}}) {
    Message({
      message,
      type: 'success',
      onClose
    })
  },
  goLogin () {
    router.push({name: 'Login'})
  },
  goTabs () {
    router.push({name: 'Tabs'})
  }

}
