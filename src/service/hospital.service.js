/*
 * @Author: L
 * @Date: 2018-04-26 17:50:25
 * @Last Modified by: L
 * @Last Modified time: 2018-05-07 23:37:48
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
  }
}
