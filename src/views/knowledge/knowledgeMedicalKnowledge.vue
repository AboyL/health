<template>
  <div class="container">
    <Header :title="headerTitle">
    </Header>
    <div class="list">
      <label-list :LabelList="list"
                  @click="goKnowledge"></label-list>
    </div>
  </div>
</template>
<script>
import Header from 'components/layout/Header.vue'
import LabelList from 'components/layout/LabelList.vue'
import knowledgeService from 'service/knowledge.service.js'
import util from 'util'

export default {
  name: 'knowledgeMedicalKnowledge',
  components: {
    Header,
    LabelList
  },
  data () {
    return {
      headerTitle: '医学小知识',
      list: []
    }
  },
  methods: {
    goKnowledge (key) {
      this.$router.push({ name: 'knowledgeArticleList', params: { key: key } })
    }
  },
  async mounted () {
    let knowledge = await knowledgeService.getAllKnowledge()
    if (knowledge.status) {
      knowledge.data.knowledge.forEach(element => {
        this.list.push({
          label: element.name,
          key: element.key
        })
      })
    } else {
      util.warningMessage({
        message: '获取失败'
      })
    }
    console.log(knowledge)
  }
}
</script>
<style scoped lang='scss'>
</style>
