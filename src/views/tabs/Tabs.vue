/*
 * @Author: L
 * @Date: 2018-04-21 16:32:00
 * @Last Modified by: L
 * @Last Modified time: 2018-04-30 16:11:05
 */
<template>
  <div class="container">
    <Header :hasHeaderLeft=false
            :title="headerTitle">
    </Header>
    <el-tabs :tab-position="'bottom'"
             class="tabs"
             @tab-click="changeTab">
      <el-tab-pane label="首页">
        <tab-home></tab-home>
      </el-tab-pane>
      <el-tab-pane label="名医">
        <tab-doctor></tab-doctor>
      </el-tab-pane>
      <el-tab-pane label="个人">
        <tab-user></tab-user>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import TabUser from './components/tab-user'
import TabHome from './components/tab-home'
import TabDoctor from './components/tab-doctor'

import Header from 'components/layout/Header.vue'

import hospitalService from 'service/hospital.service.js'
import util from 'util'

export default {
  name: 'Tabs',
  components: {
    TabUser,
    TabHome,
    TabDoctor,
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
    changeTab: function (item) {
      this.headerTitleIndex = item.index - 0
    }
  },
  mounted () {
    // 加载医院数据
    hospitalService.getAllSubject().then((res) => {
      if (res.status) {
        this.$store.commit('setSubjects', res.data)
      } else {
        util.warningMessage({
          message: '加载失败'
        })
      }
    })
  }
}
</script>
<style scoped lang='scss'>
</style>
