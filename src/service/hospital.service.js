/*
 * @Author: L
 * @Date: 2018-04-26 17:50:25
 * @Last Modified by: L
 * @Last Modified time: 2018-04-26 17:57:57
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
  }
}
