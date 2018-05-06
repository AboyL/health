<template>
  <div class="container">
    <Header :title="'修改密码'"></Header>
    <single-line-container :singleLineList="singleLineList"
                           :buttonContent="buttonContent"
                           @submit="submit"></single-line-container>
  </div>
</template>
<script>
import Header from 'components/layout/Header.vue'
import SingleLineContainer from 'components/layout/SingleLineContainer.vue'
import SimpleFooter from 'components/layout/SimpleFooter.vue'

import util from 'util'
import loginService from 'service/login.service'

export default {
  name: 'ChangePass',
  components: {
    Header,
    SingleLineContainer,
    SimpleFooter
  },
  data () {
    return {
      buttonContent: {
        text: '确认'
      },
      singleLineList: [
        {
          model: 'oldPassword',
          placeholder: '请输入原密码',
          type: 'input',
          inputType: 'password'
        },
        {
          model: 'newPassword',
          placeholder: '请输入新密码',
          type: 'input',
          inputType: 'password'
        }, {
          model: 'confirmPassword',
          placeholder: '请确认密码',
          type: 'input',
          inputType: 'password'
        }
      ]
    }
  },
  methods: {
    submit (fromData) {
      let validateResult = this.validate(fromData)
      fromData._id = this.$store.state.token
      if (validateResult.status) {
        loginService.changePass(fromData).then(res => {
          if (res.status) {
            console.log('重置成功')
            util.successMessage({
              message: res.msg,
              onClose: () => { util.goLogin() }
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
    validate (fromData) {
      let status = {
        status: true,
        msg: '检验通过'
      }
      if (!fromData.oldPassword) {
        return (status = {
          status: false,
          msg: '原密码不能为空'
        })
      }
      if (!fromData.newPassword) {
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
      if (!(fromData.confirmPassword === fromData.newPassword)) {
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

</style>
