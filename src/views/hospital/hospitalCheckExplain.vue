<template>
  <div class="container">
    <Header :title="headerTitle">
    </Header>
    <el-card class="box-card"
             v-for="(item,index) of list"
             :key="index">
      <div slot="header"
           class="clearfix">
        <span>{{item.name}}</span>
        <div class="clearfix">
          <div class="left">正常范围:{{item.range}}</div>
          <div class="right">单位:{{item.unit}}</div>
        </div>
      </div>
      <div class="text item">
        过低: {{ item.low}}
      </div>
      <div class="text item">
        过高: {{ item.high}}
      </div>
    </el-card>
  </div>
</template>
<script>
import Header from 'components/layout/Header.vue'
import HospitalService from 'service/hospital.service.js'
import util from 'util'

export default {
  name: 'hospitalCheckExplain',
  components: {
    Header
  },
  data () {
    return {
      headerTitle: '检查解读',
      list: []
    }
  },
  async mounted () {
    let result = await HospitalService.getCheckExplainSheet()
    console.log(result)
    if (result.status) {
      this.list = result.data.checkExplainSheet
    } else {
      util.warningMessage({
        message: '获取失败'
      })
    }
  }
}
</script>
<style scoped lang='scss'>
</style>
