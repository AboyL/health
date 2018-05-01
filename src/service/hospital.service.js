/*
 * @Author: L
 * @Date: 2018-04-26 17:50:25
 * @Last Modified by: L
 * @Last Modified time: 2018-05-01 12:12:02
 */

import util from 'util'
export default {
  async getSubjects () {
    let reslut = await util.request(
      {
        url: 'hospital/getSubject'
      }
    )
    return reslut
  },
  async getDoctors () {
    let reslut = await util.request(
      {
        url: 'hospital/getDoctors'
      }
    )
    return reslut
  },
  async submitCounsel (data) {
    let reslut = await util.request(
      {
        url: 'hospital/submitCounsel',
        data: data
      }
    )
    return reslut
  },
  async getCounsel () {
    let reslut = await util.request(
      {
        url: 'hospital/getCounsel'
      }
    )
    return reslut
  }
}
