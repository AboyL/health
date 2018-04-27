let Mock = require('mockjs')
let baseUrl = 'http://localhost:8080/api/'
let username = 'L'
let password = '123'
Mock.setup({
  timeout: '200-1000' // 表示响应时间介于 200 和 600 毫秒之间，默认值是'10-100'。
})
Mock.mock(`${baseUrl}user/login`, (url) => {
  let data = JSON.parse(url.body)
  let result = {}
  if (data.username === username && data.password === password) {
    result = {
      status: 1,
      msg: '登录成功',
      data: {
        token: 'zzz'
      }
    }
  } else {
    result = {
      status: 0,
      msg: '登录失败'
    }
  }
  return result
})
Mock.mock(`${baseUrl}user/register`, (url) => {
  return {
    status: 1,
    msg: '注册成功'
  }
})

Mock.mock(`${baseUrl}user/getQuestion`, (url) => {
  let data = JSON.parse(url.body)
  let result = {}
  if (data.username === username) {
    result = {
      status: 1,
      data: {
        question: '你的名字是'
      }
    }
  } else {
    result = {
      status: 0,
      msg: '没有找到用户'
    }
  }
  return result
})

Mock.mock(`${baseUrl}user/checkAnswer`, (url) => {
  let data = JSON.parse(url.body)
  console.log(data)
  let result = {}
  if (data.answer === username) {
    result = {
      status: 1,
      msg: '检验通过'
    }
  } else {
    result = {
      status: 0,
      msg: '问题回答错误'
    }
  }
  return result
})

Mock.mock(`${baseUrl}user/resetPassword`, (url) => {
  let data = JSON.parse(url.body)
  console.log(data)
  let result = {}
  result = {
    status: 1,
    msg: '重置密码成功'
  }
  return result
})

Mock.mock(`${baseUrl}user/changePass`, (url) => {
  let data = JSON.parse(url.body)
  console.log(data)
  let result = {}
  if (data.oldPassword !== password) {
    result = {
      status: 0,
      msg: '原密码输入不正确'
    }
  } else {
    result = {
      status: 1,
      msg: '修改密码成功'
    }
  }
  return result
})
