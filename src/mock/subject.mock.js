let Mock = require('mockjs')
let baseUrl = 'http://localhost:8080/api/'
Mock.setup({
  timeout: '200-1000' // 表示响应时间介于 200 和 600 毫秒之间，默认值是'10-100'。
})
Mock.mock(`${baseUrl}subject/getSubject`, (url) => {
  let result = [{
    label: '外科门诊',
    value: 'surgery_department',
    children: [
      {
        label: '骨科门诊',
        value: 'children_bone'
      }, {
        label: '疼痛门诊',
        value: 'children_pain'
      }
    ]
  }, {
    label: '儿科门诊',
    value: 'pediatric_department',
    children: [
      {
        label: '儿科门诊',
        value: 'children_pediatric_department'
      }
    ]
  }]
  return result
})
