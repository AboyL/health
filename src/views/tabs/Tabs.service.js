/*
 * @Author: L
 * @Date: 2018-04-22 19:29:27
 * @Last Modified by: L
 * @Last Modified time: 2018-04-22 19:54:13
 */
import util from 'util'
export default {
  async getHospitals () {
    let reslut = await util.request(
      {
        url: 'hospital/getHospital'
      }
    )
    return reslut
  }
}
