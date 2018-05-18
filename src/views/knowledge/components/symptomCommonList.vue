<template>
  <div class="common-symptom">
    <div class="title">
      常见症状
    </div>
    <div class="list">
      <div class="item"
           v-for="item of commonSymptomList"
           @click="goDetail(item.key)"
           :key="item.key">
        {{item.name}}
      </div>
    </div>
  </div>
</template>
<script>
import knowledgeService from 'service/knowledge.service.js'
export default {
  name: 'symptomCommonList',
  data () {
    return {
      commonSymptomList: []
    }
  },
  methods: {
    goDetail (key) {
      this.$emit('goDetail', {key})
    }
  },
  async mounted () {
    this.commonSymptomList = (await knowledgeService.getCommonSymptom()).data.symptoms
  }
}
</script>
<style scoped lang='scss'>
@import '~style/variable.scss';
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
</style>
