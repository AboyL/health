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
    <div class="symptomList"
         v-if="showList">
      <div class="list">
        <div class="item"
             v-for="item of symptomList"
             :key="item.key">
          {{item.name}}
        </div>
      </div>
    </div>
    <div class="common-symptom"
         v-if="showCommon">
      <div class="title">
        常见症状
      </div>
      <div class="list">
        <div class="item"
             v-for="item of commonSymptomList"
             :key="item.key">
          {{item.name}}
        </div>
      </div>
    </div>
    <div v-if="cantFind"
         class="cantFind">
      没有找到你所要查看的症状
    </div>
  </div>
</template>
<script>
import Header from 'components/layout/Header.vue'
import knowledgeService from 'service/knowledge.service.js'

export default {
  name: 'knowledgeSymptomQuery',
  components: {
    Header
  },
  data () {
    return {
      headerTitle: '查询知识',
      commonSymptomList: [],
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
    }
  },
  async mounted () {
    this.commonSymptomList = (await knowledgeService.getCommonSymptom()).data.symptoms
  }
}
</script>
<style scoped lang='scss'>
@import '~style/variable.scss';
$line: 0.4rem;
.search-box {
  display: flex;
  padding: 5px;
  > input {
    flex: 5;
    border-radius: 15px;
    height: $line;
    line-height: $line;
    padding: .3rem 15px;
    font-size: 12px;
    color: grey;
  }
  .icon {
    flex: 1;
    font-size: 25px;
  }
}
.common-symptom {
  padding: 0.1rem;
  .title {
    background: $bgColor;
    color: white;
    padding: 0.1rem;
    border-radius: 0.1rem;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    .item {
      width: 25%;
      padding: 0.1rem;
      height: $line;
      line-height: $line;
      text-align: center;
      border: 2px $border-color solid;
      border-radius: 0.1rem;
      margin: 0.1rem;
    }
  }
}
.list {
  .item {
    padding: 0.2rem;
    margin: .1rem .2rem;
    border: 2px $border-color solid;
    border-radius: 0.1rem;
    height: $line;
    line-height: $line;
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
