<template>
  <div class="tab-user">
    <label-list :LabelList="LabelList"></label-list>
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
