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
