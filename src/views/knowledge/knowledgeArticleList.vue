<template>
  <div class="container">
    <Header :title="headerTitle">
    </Header>
    <el-card class="box-card"
             v-for="(item,index) of articleList"
             :key="item.key">
      <!-- <div slot="header"
           class="clearfix">
        <span>{{item.title}}</span>
      </div> -->
      <div class="text item"
           @click="goDetail(index)">
        {{ item.title}}
      </div>
    </el-card>
  </div>
</template>
<script>
import Header from 'components/layout/Header.vue'
import knowledgeService from 'service/knowledge.service.js'
import util from 'util'

export default {
  name: 'knowledgeArticleList',
  components: {
    Header
  },
  data () {
    return {
      headerTitle: '文章列表',
      articleList: []
    }
  },
  methods: {
    goDetail (index) {
      console.log(index)
      this.$router.push({ name: 'knowledgeArticle', params: { key: this.$route.params.key, index } })
    }
  },
  async mounted () {
    console.log(this.$route.params.key)
    let articleList = await knowledgeService.getKnowledge({ key: this.$route.params.key })
    if (articleList.status) {
      console.log(articleList.data.knowledges)
      this._data.articleList = articleList.data.knowledge.knowledges
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
