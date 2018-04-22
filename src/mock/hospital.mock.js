let Mock = require('mockjs')
let baseUrl = 'http://localhost:8080/api/'
Mock.setup({
  timeout: '200-1000' // 表示响应时间介于 200 和 600 毫秒之间，默认值是'10-100'。
})
Mock.mock(`${baseUrl}hospital/getHospital`, (url) => {
  let result = [{
    label: '江苏',
    value: '江苏',
    children: [
      {
        label: '南京',
        value: '南京',
        children: [
          {
            label: '人民医院',
            value: '人民医院'
          }
        ]
      }
    ]
  }, {
    label: '湖南',
    value: '湖南',
    children: [
      {
        label: '长沙',
        value: '长沙',
        children: [{
          label: '湘雅二医院',
          value: '湘雅二医院'
        }
        ]
      }
    ]
  }]
  return result
})
