/*
 * @Author: L
 * @Date: 2018-04-26 21:10:12
 * @Last Modified by: L
 * @Last Modified time: 2018-05-06 11:19:19
 */
let token = ''
if (localStorage.token) {
  token = localStorage.token
} else {
  token = ''
}
export default {
  subjects: [],
  subject: [],
  token
}
