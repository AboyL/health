<template>
  <div class="container">
    <Header :title="'找回密码'"></Header>
      <SingleLineContainer
      :inputList="inputList"
      :buttonContent="buttonContent"
      @submit="submit"
    ></SingleLineContainer>
    <SimpleFooter
    v-if="step!==0"
    :footerList="footerList"
    ></SimpleFooter>
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
    SingleLineContainer,
    SimpleFooter
  },
  data() {
    return {
      step: 0,
      footerList:[
        {
          type:"button",
          text:"上一步",
          cb:this.previous
        }
      ]
    };
  },
  computed: {
    inputList: function() {
      let list = [];
      switch (this.step) {
        case 0:
          list = [
            {
              model: "username",
              placeholder: "请输入用户名称"
            }
          ];
          break;
        case 1:
          list = [
            {
              model: "question",
              placeholder: "请输入用户问题"
            },
            {
              model: "anwser",
              placeholder: "请输入找回密码答案"
            }
          ];
          break;
        case 2:
          list = [
            {
              model: "password",
              placeholder: "请输入密码"
            },
            {
              model: "confirmPassword",
              placeholder: "请确认密码"
            }
          ];
          break;
      }
      return list;
    },
    buttonContent: function() {
      let text = "";
      if (this.step === 2) {
        text = "确认";
      } else {
        text = "下一步";
      }
      return {
        text: text
      };
    }
  },
  methods: {
    submit: function(fromData) {
      this.next();
    },
    next:function(){
      if(this.step===2){
      }else{
        ++this.step
      }
    },
    previous:function(){
      if(this.step===0){
      }else{
        --this.step
      }
    }

  }
};
</script>
<style scoped lang='scss'>
@import "~style/variable.scss";
@import "~style/mixin.scss";
</style>