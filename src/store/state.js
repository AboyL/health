/*
 * @Author: L
 * @Date: 2018-04-26 21:10:12
 * @Last Modified by: L
 * @Last Modified time: 2018-05-08 11:22:47
 */
let token = ''
if (localStorage.token) {
  token = localStorage.token
} else {
  token = ''
}
let registerNumber = -1
if (localStorage.registerNumber) {
  token = localStorage.registerNumber
} else {
  registerNumber = -1
}
let registerTime = -1
if (localStorage.registerTime) {
  token = localStorage.registerTime
} else {
  registerTime = -1
}
let registerRange = ''
if (localStorage.registerRange) {
  token = localStorage.registerRange
} else {
  registerRange = ''
}
export default {
  subjects: [],
  subject: [],
  token,
  registerNumber,
  registerTime,
  registerRange
}
