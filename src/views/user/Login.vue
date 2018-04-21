<template>
  <div class="container">
    <Header 
    :hasHeaderLeft=false
    :title="'登录'"
    ></Header>
    <SingleLineContainer
      :singleLineList="singleLineList"
      :buttonContent="buttonContent"
      @submit="submit"
    >
    </SingleLineContainer>
    <SimpleFooter
    :footerList="footerList"
    ></SimpleFooter>    
  </div>
  
</template>
<script>
import Header from "components/layout/Header.vue";
import SingleLineContainer from "components/layout/SingleLineContainer.vue";
import SimpleFooter from "components/layout/SimpleFooter.vue";
import loginService from "./login.service";
import util from "util";

export default {
  name: "Login",
  components: {
    Header,
    SingleLineContainer,
    SimpleFooter
  },
  data() {
    return {
      singleLineList: [
        {
          model: "username",
          placeholder: "请输入用户名称",
          type: "input"
        },
        {
          model: "password",
          placeholder: "请输入密码",
          type: "input",
          inputType: "password"
        }
      ],
      buttonContent: {
        text: "登录"
      },
      footerList: [
        {
          type: "link",
          text: "忘记密码",
          linkTo: "ForgetPass"
        },
        {
          type: "link",
          text: "注册",
          linkTo: "Register"
        }
      ]
    };
  },
  methods: {
    submit: function(fromData) {
      let validateResult = this.validate(fromData);
      if (validateResult.status) {
        loginService.login(fromData).then(res => {
          if (res.status) {
             util.successMessage({
              message: res.msg,
            });
          } else {
            console.log(res.msg);
             util.warningMessage({
              message: res.msg,
            });
          }
        });
      } else {
         util.warningMessage({
          message: validateResult.msg,
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
      return status;
    }
  }
};
</script>
<style scoped lang='scss'>

</style>