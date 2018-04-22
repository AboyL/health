<template>
  <div class="tab-user">
    <LabelList :LabelList="LabelList"></LabelList>
  </div>
</template>
<script>
import LabelList from 'components/layout/LabelList.vue'

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
          label: '我的病历'
        },
        {
          label: '我的咨询'
        },
        {
          label: '修改密码'
        },
        {
          label: '退出登录'
        }
      ]
    }
  }
}
</script>
<style scoped lang='scss'>
.tab-user {
  height: 100%;
}
</style>
