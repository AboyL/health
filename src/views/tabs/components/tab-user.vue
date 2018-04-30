/*
 * @Author: L
 * @Date: 2018-04-25 23:32:03
 * @Last Modified by: L
 * @Last Modified time: 2018-04-30 16:25:43
 */
<template>
  <div class="tab-user">
    <label-list :LabelList="LabelList"></label-list>
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
          content: 'L'
        },
        {
          label: '修改密码',
          cb: this.changePass
        },
        {
          label: '退出登录',
          cb: this.loginOut
        }
      ]
    }
  },
  methods: {
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
