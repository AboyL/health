<template>
  <div class="container">
    <Header :title="'注册'"></Header>
    <SingleLineContainer
      :inputList="inputList"
      :buttonContent="buttonContent"
      @submit="submit"
    ></SingleLineContainer>
  </div>
</template>
<script>
import Header from "components/layout/Header.vue";
import SingleLineContainer from "components/layout/SingleLineContainer.vue";
import SimpleFooter from "components/layout/SimpleFooter.vue";

import loginService from "./login.service";
import util from "util";


export default {
  name: "Register",
  components: {
    Header,
    SingleLineContainer
  },
  data() {
    return {
      inputList: [
        {
          model: "username",
          placeholder: "请输入用户名称"
        },
        {
          model: "password",
          placeholder: "请输入密码"
        },
        {
          model: "confirmPassword",
          placeholder: "请确认密码"
        },
        {
          model: "question",
          placeholder: "请输入找回密码问题"
        },
        {
          model: "anwser",
          placeholder: "请输入问题答案"
        }
      ],
      buttonContent: {
        text: "注册"
      }
    };
  },
  methods: {
    submit: function(fromData) {
      let validateResult = this.validate(fromData);
      if (validateResult.status) {
        loginService.register(fromData).then(res => {
          if (res.status) {
            this.$message({
              message: res.msg,
              type: "success"
            });
          } else {
            console.log(res.msg);
            this.$message({
              message: res.msg,
              type: "warning"
            });
          }
        });
      } else {
        this.$message({
          message: validateResult.msg,
          type: "warning"
        });
      }
    },
    validate: function(fromData) {
      let status = {
        status: true,
        msg: "检验通过"
      };
      if (!fromData.username) {
        return (status = {
          status: false,
          msg: "用户名不能为空"
        });
      }
      if (!fromData.password) {
        return (status = {
          status: false,
          msg: "密码不能为空"
        });
      }
      if (!fromData.confirmPassword) {
        return (status = {
          status: false,
          msg: "确认密码不能为空"
        });
      }
      if (!fromData.question) {
        return (status = {
          status: false,
          msg: "找回密码问题不能为空"
        });
      }
      if (!fromData.anwser) {
        return (status = {
          status: false,
          msg: "找回密码问题答案不能为空"
        });
      }
      if (fromData.password !== fromData.confirmPassword) {
        return (status = {
          status: false,
          msg: "两次密码输入不一致"
        });
      }
      return status;
    }
  }
};
</script>
<style scoped lang='scss'>
@import "~style/variable.scss";
@import "~style/mixin.scss";
</style>