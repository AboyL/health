/*
 * @Author: L
 * @Date: 2018-04-21 16:32:00
 * @Last Modified by: L
 * @Last Modified time: 2018-04-22 09:38:42
 */
<template>
  <div class="container">
    <Header :hasHeaderLeft=false
            :title="headerTitle"></Header>
    <el-tabs :tab-position="'bottom'"
             class="tabs">
      <el-tab-pane label="首页"
                   @tab-click="changeTab(0)">
        首页</el-tab-pane>
      <el-tab-pane label="名医"
                   @tab-click="changeTab(1)">
        >名医</el-tab-pane>
      <el-tab-pane label="个人"
                   @tab-click="changeTab(2)">
        <TabUser></TabUser>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import TabUser from './components/tab-user'
import Header from 'components/layout/Header.vue'

export default {
  name: 'Tabs',
  components: {
    TabUser,
    Header
  },
  data () {
    return {
      headerTitleIndex: 0
    }
  },
  computed: {
    headerTitle: function () {
      let headerTitle = ''
      switch (this.headerTitleIndex) {
        case 0: headerTitle = '首页'; break
        case 1: headerTitle = '名医'; break
        case 2: headerTitle = '个人'; break
      }
      return headerTitle
    }
  },
  methods: {
    changeTab: function (index) {
      this.headerTitleIndex = index
    }
  }
}
</script>
<style scoped lang='scss'>
.container{
  width: 100%;
  height: 100%;
}
</style>
