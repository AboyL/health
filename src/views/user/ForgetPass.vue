/*
 * @Author: L
 * @Date: 2018-04-21 15:54:39
 * @Last Modified by: L
 * @Last Modified time: 2018-04-25 20:49:59
 */
<template>
  <div class="container">
    <Header :title="'找回密码'"></Header>
      <single-line-container
      :singleLineList="singleLineList"
      :buttonContent="buttonContent"
      @submit="submit"
    ></single-line-container>
    <simple-footer
    v-if="step!==0"
    :footerList="footerList"
    ></simple-footer>
  </div>
</template>
<script>
import Header from 'components/layout/Header.vue'
import SingleLineContainer from 'components/layout/SingleLineContainer.vue'
import SimpleFooter from 'components/layout/SimpleFooter.vue'

import util from 'util'
import loginService from './login.service'
let step0SingleLineList = () => {
  return [
    {
      model: 'username',
      placeholder: '请输入用户名称',
      type: 'input'
    }
  ]
}
let step1SingleLineList = res => {
  return [
    {
      content: res.data.question,
      type: 'div'
    },
    {
      model: 'answer',
      placeholder: '请输入找回密码答案',
      type: 'input'
    }
  ]
}
let step2SingleLineList = () => {
  return [
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
    }
  ]
}
export default {
  name: 'Register',
  components: {
    Header,
    SingleLineContainer,
    SimpleFooter
  },
  data () {
    return {
      step: 0,
      footerList: [
        {
          type: 'button',
          text: '上一步',
          cb: this.previous
        }
      ],
      singleLineList: step0SingleLineList(),
      primaryQuestion: {}
    }
  },
  computed: {
    buttonContent: function () {
      let text = ''
      if (this.step === 2) {
        text = '确认'
      } else {
        text = '下一步'
      }
      return {
        text: text
      }
    }
  },
  methods: {
    submit: function (fromData) {
      let canSubmit = true
      if (this.step === 0) {
        if (!fromData.username) {
          util.warningMessage({
            message: '用户名不能为空'
          })
          canSubmit = false
        }
      } else if (this.step === 1) {
        if (!fromData.answer) {
          util.warningMessage({
            message: '回答不能为空'
          })
          canSubmit = false
        }
      } else if (this.step === 2) {
        if (!fromData.password) {
          util.warningMessage({
            message: '密码不能为空'
          })
          canSubmit = false
        }
        if (!fromData.confirmPassword) {
          util.warningMessage({
            message: '确认密码不能为空'
          })
          canSubmit = false
        }
        if (fromData.password !== fromData.confirmPassword) {
          util.warningMessage({
            message: '两次密码不一致'
          })
          canSubmit = false
        }
      }
      if (canSubmit) {
        this.next(fromData)
      }
    },
    // 下一步
    next: function (fromData) {
      if (this.step === 0) {
        // 获取用户问题
        loginService.getQuestion(fromData).then(res => {
          if (res.status) {
            ++this.step
            this.primaryQuestion = res
            this.singleLineList = step1SingleLineList(res)
          } else {
            util.warningMessage({
              message: res.msg
            })
          }
        })
      } else if (this.step === 1) {
        // 检查答案
        loginService.checkAnswer(fromData).then(res => {
          if (res.status) {
            ++this.step
            this.singleLineList = step2SingleLineList()
          } else {
            util.warningMessage({
              message: res.msg
            })
          }
        })
      } else if (this.step === 2) {
        // 重置密码
        loginService.resetPassword(fromData).then(res => {
          if (res.status) {
            util.successMessage({
              message: '重置密码成功',
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
      }
    },
    // 上一步
    previous: function () {
      if (this.step === 1) {
        --this.step
        this.singleLineList = step0SingleLineList()
      } else if (this.step === 2) {
        --this.step
        this.singleLineList = step1SingleLineList(this.primaryQuestion)
      }
      console.log('previous')
      console.log(this.step)
    }
  }
}
</script>
<style scoped lang='scss'>
@import "~style/variable.scss";
@import "~style/mixin.scss";

</style>
