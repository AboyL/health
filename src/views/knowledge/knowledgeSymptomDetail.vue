<template>
  <div class="container">
    <Header :title="headerTitle">
    </Header>
    <el-card class="box-card" v-for="(item,index) of detail" :key="index">
      <div slot="header"
           class="clearfix">
        <span>{{item.name}}</span>
      </div>
      <div class="text item">
        {{ item.value}}
      </div>
    </el-card>
  </div>
</template>
<script>
import Header from 'components/layout/Header.vue'
import knowledgeService from 'service/knowledge.service.js'
import util from 'util'

export default {
  name: 'knowledgeSymptomDetail',
  components: {
    Header
  },
  data () {
    return {
      headerTitle: '症状详情',
      detail: []
    }
  },
  methods: {
    async getSymptom (key) {
      let symptom = await knowledgeService.getSymptom({ key })
      if (symptom.status) {
        let detail = symptom.data.symptom
        this.detail = [
          {name: '简介', value: detail.abstract},
          {name: '病因', value: detail.reason},
          {name: '症状', value: detail.behave},
          {name: '治疗', value: detail.therapy},
          {name: '预防', value: detail.prevent}
        ]
      } else {
        util.warningMessage({
          message: '获取失败'
        })
      }
      console.log(symptom)
    }
  },
  mounted () {
    console.log(this.$route.params.key)
    // 获取信息
    this.getSymptom(this.$route.params.key)
  }
}
</script>
<style scoped lang='scss'>
.box-card{
  margin: .1rem;
}
</style>
