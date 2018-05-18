<template>
  <div class="container">
    <Header :title="headerTitle">
    </Header>
    <div class="search-box">
      <input type="search"
             v-model="keyValue"
             placeholder="请输入想搜索的症状">
      <svg class="icon"
           @click="search"
           aria-hidden="true">
        <use xlink:href="#h-icon-sousuo"></use>
      </svg>
    </div>
    <symptom-list v-if="showList"
                  :symptomList="symptomList"
                  @goDetail="goDetail">
    </symptom-list>
    <symptom-common-list v-if="showCommon"
                         @goDetail="goDetail">
    </symptom-common-list>
    <div v-if="cantFind"
         class="cantFind">
      没有找到你所要查看的症状
    </div>
  </div>
</template>
<script>
import Header from 'components/layout/Header.vue'
import knowledgeService from 'service/knowledge.service.js'
import symptomCommonList from './components/symptomCommonList'
import symptomList from './components/symptomList'

export default {
  name: 'knowledgeSymptomQuery',
  components: {
    Header,
    symptomCommonList,
    symptomList
  },
  data () {
    return {
      headerTitle: '查询知识',
      symptomList: [],
      showCommon: true,
      showList: false,
      cantFind: false,
      keyValue: ''
    }
  },
  methods: {
    async search () {
      console.log(this.keyValue)
      let symptomList = await knowledgeService.querySymptom({
        keyValue: this.keyValue }
      )
      this.showCommon = false
      if (symptomList.data.symptom.length) {
        console.log('object')
        this.showList = true
        this.cantFind = false
        this.symptomList = symptomList.data.symptom
      } else {
        this.showList = false
        this.cantFind = true
      }
    },
    goDetail ({ key }) {
      console.log(key)
      this.$router.push({ name: 'knowledgeSymptomDetail', params: { key: key } })
    }
  }
}
</script>
<style scoped lang='scss'>
@import '~style/variable.scss';
.search-box {
  display: flex;
  padding: 5px;
  > input {
    flex: 5;
    border-radius: 15px;
    height: $line;
    line-height: $line;
    padding: 0.3rem 15px;
    font-size: 12px;
    color: grey;
  }
  .icon {
    flex: 1;
    font-size: 25px;
  }
}

.cantFind {
  padding: 0.2rem;
  margin: 0 0.2rem;
  text-align: center;
  color: red;
  font-size: 0.5rem;
}
</style>
