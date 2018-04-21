<template>
  <div class="container">
    <Header :title="'找回密码'"></Header>
      <SingleLineContainer
      :singleLineList="singleLineList"
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

import util from "util";

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
      footerList: [
        {
          type: "button",
          text: "上一步",
          cb: this.previous
        }
      ]
    };
  },
  computed: {
    singleLineList: function() {
      let list = [];
      switch (this.step) {
        case 0:
          list = [
            {
              model: "username",
              placeholder: "请输入用户名称",
              type:'input',
            }
          ];
          break;
        case 1:
          list = [
            {
              content: "问题是",
              placeholder: "请输入用户问题",
              type:'div',              
            },
            {
              model: "anwser",
              placeholder: "请输入找回密码答案",
              type:'input',     
            }
          ];
          break;
        case 2:
          list = [
            {
              model: "password",
              placeholder: "请输入密码",
              type:'input',      
              inputType:"password",                               
            },
            {
              model: "confirmPassword",
              placeholder: "请确认密码",
              type:'input',              
              inputType:"password",                       
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
      let canSubmit = true;
      if (this.step === 0) {
        if (!fromData.username) {
          util.warningMessage({
            message: "用户名不能为空"
          });
          canSubmit = false;
        }
      } else if (this.step === 1) {
        if (!fromData.anwser) {
          util.warningMessage({
            message: "回答不能为空"
          });
          canSubmit = false;
        }
      } else if (this.step === 2) {
        if (!fromData.password) {
          util.warningMessage({
            message: "密码不能为空"
          });
          canSubmit = false;
        }
        if (!fromData.confirmPassword) {
          util.warningMessage({
            message: "确认密码不能为空"
          });
          canSubmit = false;
        }
        if (fromData.password !== fromData.confirmPassword) {
          util.warningMessage({
            message: "两次密码不一致"
          });
          canSubmit = false;
        }
      }
      if (canSubmit) {
        this.next();
      }
    },
    next: function() {
      if (this.step === 2) {
      } else {
        ++this.step;
      }
    },
    previous: function() {
      if (this.step === 0) {
      } else {
        --this.step;
      }
    }
  }
};
</script>
<style scoped lang='scss'>
@import "~style/variable.scss";
@import "~style/mixin.scss";
</style>