/*
 * @Author: L
 * @Date: 2018-04-22 19:29:27
 * @Last Modified by: L
 * @Last Modified time: 2018-04-25 19:54:46
 */
import util from 'util'
export default {
  async getSubjects () {
    let reslut = await util.request(
      {
        url: 'subject/getSubject'
      }
    )
    return reslut
  }
}
