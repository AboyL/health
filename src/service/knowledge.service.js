/*
 * @Author: L
 * @Date: 2018-05-17 21:43:00
 * @Last Modified by: L
 * @Last Modified time: 2018-05-19 17:16:18
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
  },
  async getSymptom ({key}) {
    let reslut = await util.request(
      {
        url: 'knowledge/getSymptom',
        data: {
          key
        }
      }
    )
    return reslut
  },
  async getAllKnowledge () {
    let reslut = await util.request(
      {
        url: 'knowledge/getAllKnowledge'
      }
    )
    return reslut
  },
  async getKnowledge ({key}) {
    let reslut = await util.request(
      {
        url: 'knowledge/getKnowledge',
        data: {key}
      }
    )
    return reslut
  }
}
