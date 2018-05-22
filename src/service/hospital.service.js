/*
 * @Author: L
 * @Date: 2018-04-26 17:50:25
 * @Last Modified by: L
 * @Last Modified time: 2018-05-21 21:06:05
 */

import util from 'util'
export default {
  async getAllSubject () {
    let reslut = await util.request(
      {
        url: 'hospital/getAllSubject'
      }
    )
    return reslut
  },
  async getDoctors (data) {
    let reslut = await util.request(
      {
        url: 'hospital/getDoctors',
        data
      }
    )
    return reslut
  },
  async getADoctor (data) {
    let reslut = await util.request(
      {
        url: 'hospital/getADoctor',
        data
      }
    )
    return reslut
  },
  async submitCounsel (data) {
    let reslut = await util.request(
      {
        url: 'hospital/submitCounsel',
        data
      }
    )
    return reslut
  },
  async getCounsels (data) {
    let reslut = await util.request(
      {
        url: 'hospital/getCounsels',
        data
      }
    )
    return reslut
  },
  async getMedicalHistorys (data) {
    let reslut = await util.request(
      {
        url: 'hospital/getMedicalHistorys',
        data
      }
    )
    return reslut
  },
  async getDoctorRegistrationSheet (data) {
    let reslut = await util.request(
      {
        url: 'hospital/getDoctorRegistrationSheet',
        data
      }
    )
    return reslut
  },
  async submitRegistration (data) {
    let reslut = await util.request(
      {
        url: 'hospital/submitRegistration',
        data
      }
    )
    return reslut
  },
  async clearRegistrationSheet (data) {
    let reslut = await util.request(
      {
        url: 'hospital/clearRegistrationSheet',
        data
      }
    )
    return reslut
  },
  async getCheckExplainSheet () {
    let reslut = await util.request(
      {
        url: 'hospital/getCheckExplainSheet'
      }
    )
    return reslut
  },
  async getCheckSheet ({ checkSheetId }) {
    let reslut = await util.request(
      {
        url: 'hospital/getCheckSheet',
        data: {
          checkSheetId
        }
      }
    )
    return reslut
  },
  async getPhysicalExaminationList () {
    let reslut = await util.request(
      {
        url: 'hospital/getPhysicalExaminationList'
      }
    )
    return reslut
  },
  async getPhysicalExamination ({ key }) {
    let reslut = await util.request(
      {
        url: 'hospital/getPhysicalExamination',
        data: {
          key
        }
      }
    )
    return reslut
  },
  async submitPhysicalExamination ({ key, username, date }) {
    let reslut = await util.request(
      {
        url: 'hospital/submitPhysicalExamination',
        data: {
          key,
          username,
          date
        }
      }
    )
    return reslut
  },
  async cancelPhysicalExamination ({ physicalExaminationId, username }) {
    let reslut = await util.request(
      {
        url: 'hospital/cancelPhysicalExamination',
        data: {
          physicalExaminationId,
          username
        }
      }
    )
    return reslut
  }
}
