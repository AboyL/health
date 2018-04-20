<template>
  <div class="container">
    <Header 
    :hasHeaderLeft=false
    :title="'登录'"
    ></Header>
    <SingleLineContainer
      :inputList="inputList"
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
      inputList: [
        {
          model: "username",
          placeholder: "请输入用户名称"
        },
        {
          model: "password",
          placeholder: "请输入密码"
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
       return status = {
          status: false,
          msg: "用户名不能为空"
        };
      }
      if (!fromData.password) {
       return status = {
          status: false,
          msg: "密码不能为空"
        };
      }
      return status;``
    }
  }
};
</script>
<style scoped lang='scss'>

</style>