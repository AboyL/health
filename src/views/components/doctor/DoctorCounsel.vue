/*
 * @Author: L
 * @Date: 2018-04-29 16:53:06
 * @Last Modified by: L
 * @Last Modified time: 2018-04-30 16:25:32
 */
<template>
  <div class="wrapper">
    <div class="box">
      <div class="title">向医生发起咨询</div>
      <textarea name=""
                placeholder="请输入症状"
                v-model="content"
                id="content-box">
      </textarea>
      <div class="operate-box">
        <div class="cancel" @click="cancel">取消</div>
        <div class="submit" @click="submit">确认</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DoctorCounsel',
  data () {
    return {
      content: ''
    }
  },
  methods: {
    cancel () {
      this.$emit('cancel')
    },
    submit () {
      this.$emit('submit', this.content)
    }
  }
}
</script>
<style scoped lang='scss'>
@import '~style/variable.scss';
@import '~style/mixin.scss';

.wrapper {
  // 设置外层遮罩
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(180, 179, 179,.3);
  z-index: 999;
  .box {
    width: 5rem;
    margin: 2rem auto;
    background-color: white;
    opacity: 1;
    z-index: 1000;
    .title {
      padding: 10px;
      text-align: center;
      @include gradual-background;
      color: white;
    }
    #content-box {
      width: 100%;
      height: 3rem;
      padding: 10px;
      box-sizing: border-box;
    }
    .operate-box {
      display: flex;
      > div {
        flex: 1;
        padding: 10px;
        text-align: center;
        color: white;
      }
      .cancel{
      @include gradual-background-cancal;
      }
      .submit{
      @include gradual-background;
      }
    }
  }
}
</style>
