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

export default {
  name: "Register",
  components: {
    Header,
    SingleLineContainer
  },
  data() {
    return {
      inputList:[
        {
          model:"username",
          placeholder:"请输入用户名称"
        },
        {
          model:"password",
          placeholder:"请输入密码"
        },
        {
          model:"confirmPassword",
          placeholder:"请确认密码"
        },{
          model:"question",
          placeholder:"请输入找回密码问题"
        },{
          model:"anwser",
          placeholder:"请输入问题答案"
        },
      ],
      buttonContent:{
        text:"注册"
      }
    };
  },
  methods:{
    submit:function(fromData){
      console.log(fromData);
    }
  },
};
</script>
<style scoped lang='scss'>
@import "~style/variable.scss";
@import "~style/mixin.scss";
</style>