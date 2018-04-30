let Mock = require('mockjs')
let baseUrl = 'http://localhost:8080/api/'
Mock.setup({
  timeout: '200-1000' // 表示响应时间介于 200 和 600 毫秒之间，默认值是'10-100'。
})
Mock.mock(`${baseUrl}hospital/getSubject`, (url) => {
  let result = {
    status: 1,
    data: [{
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
  }
  return result
})

Mock.mock(`${baseUrl}hospital/getDoctors`, (url) => {
  let result = {
    status: 1,
    data: [{
      name: '笑嘻嘻',
      sex: 1,
      position: '主治医生',
      state: 1,
      introduce: '擅长看病',
      id: '1'
    },
    {
      name: 'mmp',
      sex: 0,
      position: '主治医生',
      state: 0,
      introduce: '擅长看病',
      id: '2'
    }]
  }
  return result
})

Mock.mock(`${baseUrl}hospital/submitCounsel`, (url) => {
  let result = {
    status: 1,
    msg: '提交成功'
  }
  return result
})
