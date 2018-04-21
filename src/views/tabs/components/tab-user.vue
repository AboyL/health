<template>
  <div class="tab-user">
    <Header :hasHeaderLeft=false
            :title="'个人信息'"></Header>
    <LabelList :LabelList="LabelList"></LabelList>
  </div>
</template>
<script>
import Header from 'components/layout/Header.vue'
import LabelList from 'components/layout/LabelList.vue'

export default {
  name: 'TabUser',
  components: {
    Header,
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
