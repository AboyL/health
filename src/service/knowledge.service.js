/*
 * @Author: L
 * @Date: 2018-05-17 21:43:00
 * @Last Modified by: L
 * @Last Modified time: 2018-05-17 22:26:31
 */

import util from 'util'
export default {
  async getCommonSymptom () {
    let reslut = await util.request(
      {
        url: 'knowledge/getCommonSymptom'
      }
    )
    return reslut
  },
  async querySymptom ({keyValue}) {
    let reslut = await util.request(
      {
        url: 'knowledge/querySymptom',
        data: {
          keyValue
        }
      }
    )
    return reslut
  }
}
