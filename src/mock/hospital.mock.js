let Mock = require('mockjs')
let baseUrl = 'http://localhost:8080/api/'
Mock.setup({
  timeout: '200-1000' // 表示响应时间介于 200 和 600 毫秒之间，默认值是'10-100'。
})
Mock.mock(`${baseUrl}hospital/getAllSubject`, (url) => {
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

Mock.mock(`${baseUrl}hospital/getCounsels`, (url) => {
  let result = {
    status: 1,
    msg: '提交成功',
    data: {
      list: [
        {
          id: '1',
          question: '不要问国家为你做了什么',
          answer: '而要问你为国家做了什么'
        },
        {
          id: '2',
          question: '不要问你为国家做了什么',
          answer: '而要问国家为你做了什么'
        }
      ]
    }
  }
  return result
})

Mock.mock(`${baseUrl}hospital/getMedicalHistorys`, (url) => {
  let result = {
    status: 1,
    data: {
      list: [
        {
          id: '1',
          time: '2017-12-28',
          symptom: '发热',
          result: '因发热导致咽喉炎',
          recipe: [
            [
              {
                value: '阿莫西林'
              }, {
                value: 3
              }, {
                value: '盒'
              }, {
                value: 3
              }
            ]
          ]
        }
      ]
    }
  }
  return result
})
