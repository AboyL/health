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
import loginService from './login.service'
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
      console.log(fromData);
      console.log(loginService);
      loginService.login();
    }
  }
};
</script>
<style scoped lang='scss'>
</style>