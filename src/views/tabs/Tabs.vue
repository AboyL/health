/*
 * @Author: L
 * @Date: 2018-04-21 16:32:00
 * @Last Modified by: L
 * @Last Modified time: 2018-04-21 18:07:01
 */
<template>
  <el-tabs :tab-position="'bottom'" style="height: 100%;" class="tabs">
    <el-tab-pane label="首页">首页</el-tab-pane>
    <el-tab-pane label="名医">名医</el-tab-pane>
    <el-tab-pane label="个人">
      <TabUser></TabUser>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import TabUser from './components/tab-user'
export default {
  name: 'Tabs',
  components: {
    TabUser
  }
}
</script>
<style scoped lang='scss'>

</style>
