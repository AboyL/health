/*
 * @Author: L
 * @Date: 2018-04-25 23:32:03
 * @Last Modified by: L
 * @Last Modified time: 2018-05-11 16:15:01
 */
<template>
  <div class="tab-user">
    <label-list :LabelList="LabelList" @click="click"></label-list>
  </div>
</template>
<script>
import LabelList from 'components/layout/LabelList.vue'
import util from 'util'

export default {
  name: 'TabUser',
  components: {
    LabelList
  },
  data () {
    return {
      LabelList: [
        {
          label: '用户名',
          key: 'userName',
          content: this.$store.state.username
        },
        {
          label: '修改密码',
          key: 'chagePass'
        },
        {
          label: '退出登录',
          key: 'loginOut'
        }
      ]
    }
  },
  methods: {
    click (key) {
      switch (key) {
        case 'chagePass':this.changePass(); break
        case 'loginOut':this.loginOut(); break
      }
    },
    loginOut () {
      util.loginOut()
    },
    changePass () {
      this.$router.push({name: 'ChangePass'})
    }
  }
}
</script>
<style scoped lang='scss'>
.tab-user {
  height: 100%;
}
</style>
