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
        <div class="time">{{item.time}}</div>
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
          <row-item :row="recipe"
                    v-for="(recipe,index) in item.recipe"
                    :key="index">
          </row-item>
        </div>
      </div>
    </div>
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
      recipeName: [
        {
          value: '药名'
        }, {
          value: '数量'
        }, {
          value: '单位'
        }, {
          value: '次数/天'
        }
      ],
      hospitalMedicalHistory: []
    }
  },
  mounted () {
    HospitalService.getMedicalHistory().then(res => {
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
