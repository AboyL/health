/*
 * @Author: L
 * @Date: 2018-04-21 15:55:19
 * @Last Modified by: L
 * @Last Modified time: 2018-04-30 16:26:41
 */
<template>
  <div class="container">
    <Header :title="'注册'"></Header>
    <single-line-container
      :singleLineList="singleLineList"
      :buttonContent="buttonContent"
      @submit="submit"
    ></single-line-container>
  </div>
</template>
<script>
import Header from 'components/layout/Header.vue'
import SingleLineContainer from 'components/layout/SingleLineContainer.vue'

import loginService from 'service/login.service'
import util from 'util'

export default {
  name: 'Register',
  components: {
    Header,
    SingleLineContainer
  },
  data () {
    return {
      singleLineList: [
        {
          model: 'username',
          placeholder: '请输入用户名称',
          type: 'input'
        },
        {
          model: 'password',
          placeholder: '请输入密码',
          type: 'input',
          inputType: 'password'
        },
        {
          model: 'confirmPassword',
          placeholder: '请确认密码',
          type: 'input',
          inputType: 'password'
        },
        {
          model: 'question',
          placeholder: '请输入找回密码问题',
          type: 'input'
        },
        {
          model: 'answer',
          placeholder: '请输入问题答案',
          type: 'input'
        }
      ],
      buttonContent: {
        text: '注册'
      }
    }
  },
  methods: {
    submit: function (fromData) {
      let validateResult = this.validate(fromData)
      if (validateResult.status) {
        loginService.register(fromData).then(res => {
          if (res.status) {
            util.successMessage({
              message: '注册成功',
              onClose: () => {
                util.goLogin()
              }
            })
          } else {
            util.warningMessage({
              message: res.msg
            })
          }
        })
      } else {
        util.warningMessage({
          message: validateResult.msg
        })
      }
    },
    validate: function (fromData) {
      let status = {
        status: true,
        msg: '检验通过'
      }
      if (!fromData.username) {
        return (status = {
          status: false,
          msg: '用户名不能为空'
        })
      }
      if (!fromData.password) {
        return (status = {
          status: false,
          msg: '密码不能为空'
        })
      }
      if (!fromData.confirmPassword) {
        return (status = {
          status: false,
          msg: '确认密码不能为空'
        })
      }
      if (!fromData.question) {
        return (status = {
          status: false,
          msg: '找回密码问题不能为空'
        })
      }
      if (!fromData.answer) {
        return (status = {
          status: false,
          msg: '找回密码问题答案不能为空'
        })
      }
      if (fromData.password !== fromData.confirmPassword) {
        return (status = {
          status: false,
          msg: '两次密码输入不一致'
        })
      }
      return status
    }
  }
}
</script>
<style scoped lang='scss'>
@import "~style/variable.scss";
@import "~style/mixin.scss";
</style>
