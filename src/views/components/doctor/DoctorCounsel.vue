/*
 * @Author: L
 * @Date: 2018-04-29 16:53:06
 * @Last Modified by: L
 * @Last Modified time: 2018-05-07 12:26:22
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
  .box {

    #content-box {
      width: 100%;
      height: 3rem;
      padding: 10px;
      box-sizing: border-box;
    }

  }
}
</style>
