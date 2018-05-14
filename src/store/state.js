/*
 * @Author: L
 * @Date: 2018-04-26 21:10:12
 * @Last Modified by: L
 * @Last Modified time: 2018-05-13 22:59:46
 */
let token = ''
if (localStorage.token) {
  token = localStorage.token
} else {
  token = ''
}
let registerNumber = -1
if (localStorage.registerNumber) {
  registerNumber = localStorage.registerNumber
} else {
  registerNumber = -1
}
let registerTime = -1
if (localStorage.registerTime) {
  registerTime = localStorage.registerTime
} else {
  registerTime = -1
}
let registerRange = ''
if (localStorage.registerRange) {
  registerRange = localStorage.registerRange
} else {
  registerRange = ''
}
let username = ''
if (localStorage.username) {
  username = localStorage.username
} else {
  username = ''
}
export default {
  subjects: [],
  subject: [],
  token,
  registerNumber,
  registerTime,
  registerRange,
  username
}
