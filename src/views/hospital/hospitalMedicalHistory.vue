<template>
  <div class="container">
    <Header class="header"
            :title="'我的病历'">
    </Header>
    <div class="card-list">
      <div class="card-item"
           v-if="hospitalMedicalHistory.length>0"
           v-for="(item,index) in hospitalMedicalHistory"
           :key="index">
        <div class="time">{{item.createTime}}</div>
        <div>
          <div>症状:</div>
          <div>
            {{item.symptom}}
          </div>
        </div>
        <div>
          <div>结果:</div>
          <div>
            {{item.result}}
          </div>
        </div>
        <div v-if="item.recipe.length>0">
          <div>处方</div>
          <row-item :row="recipeName"></row-item>
          <row-item :row="{
                    name:recipe.name,
                    number:recipe.number,
                    unit:recipe.unit,
                    frequency:recipe.frequency}"
                    v-for="(recipe,index) in item.recipe"
                    :key="index">
          </row-item>
        </div>
        <el-button type="success"
                   round
                   @click="showCheckSheet(item.checkSheetId)">查看报告单</el-button>
      </div>
    </div>
    <el-dialog title="检查单"
               :visible.sync="showCheckSheetBox">
      <el-table :data="checkSheet">
        <el-table-column property="name"
                         label="检查项"
                         width="100">
        </el-table-column>
        <el-table-column property="count"
                         label="数值"
                         width="100">
        </el-table-column>
        <el-table-column property="unit"
                         label="单位"
                         width="100">
        </el-table-column>
      </el-table>
      <div slot="footer"
           class="dialog-footer">
        <el-button type="primary"
                   @click="showCheckSheetBox = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Header from 'components/layout/Header.vue'
import RowItem from 'components/layout/RowItem.vue'
import HospitalService from 'service/hospital.service.js'

import util from 'util'

export default {
  name: 'hospitalMedicalHistory',
  components: {
    Header,
    RowItem
  },
  data () {
    return {
      recipeName: {
        name: '药名',
        number: '数量',
        unit: '单位',
        frequency: '次/天'
      },
      hospitalMedicalHistory: [],
      checkSheet: [],
      showCheckSheetBox: false
    }
  },
  methods: {
    async showCheckSheet (checkSheetId) {
      console.log(checkSheetId)
      let checkSheet = await HospitalService.getCheckSheet({ checkSheetId })
      if (checkSheet.status) {
        this.showCheckSheetBox = true
        this.checkSheet = checkSheet.data.checkSheet.result
      } else {
        util.warningMessage({
          message: '加载失败'
        })
      }
      console.log(checkSheet)
    }
  },
  mounted () {
    HospitalService.getMedicalHistorys({
      userId: this.$store.state.token
    }).then(res => {
      console.log(res)
      if (res.status) {
        this.hospitalMedicalHistory = res.data.list
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
