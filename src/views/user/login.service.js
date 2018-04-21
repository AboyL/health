/*
 * @Author: L
 * @Date: 2018-04-21 15:54:45
 * @Last Modified by: L
 * @Last Modified time: 2018-04-21 15:56:06
 */
import util from 'util'
export default {
  async login (data) {
    let reslut = await util.request(
      {
        url: 'user/login',
        data: data
      }
    )
    return reslut
  },
  async register (data) {
    let reslut = await util.request(
      {
        url: 'user/register',
        data: data
      }
    )
    return reslut
  },
  async getQuestion (data) {
    let reslut = await util.request(
      {
        url: 'user/getQuestion',
        data: data
      }
    )
    return reslut
  },
  async checkAnswer (data) {
    let reslut = await util.request(
      {
        url: 'user/checkAnswer',
        data: data
      }
    )
    return reslut
  },
  async resetPassword (data) {
    let reslut = await util.request(
      {
        url: 'user/resetPassword',
        data: data
      }
    )
    return reslut
  }
}
