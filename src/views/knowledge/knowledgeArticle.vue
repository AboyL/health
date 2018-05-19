<template>
  <div class="container">
    <Header :title="headerTitle">
    </Header>
    <div class="article">
      <div class="title">
        <div class="content">{{title}}</div>
        <div class="createTime">{{createTime}}</div>
        <div class="author">{{author}}</div>
      </div>
      <div v-html="article" class="content"></div>
    </div>
  </div>
</template>
<script>
import Header from 'components/layout/Header.vue'
import knowledgeService from 'service/knowledge.service.js'
import util from 'util'

export default {
  name: 'knowledgeArticle',
  components: {
    Header
  },
  data () {
    return {
      headerTitle: '文章详情',
      title: '',
      createTime: '',
      author: '',
      article: ''
    }
  },
  async mounted () {
    console.log(this.$route.params.key)
    let result = await knowledgeService.getKnowledge({ key: this.$route.params.key })
    if (result.status) {
      console.log('文章')
      let article = result.data.knowledge.knowledges[this.$route.params.index]
      this._data.title = article.title
      this._data.createTime = article.createTime
      this._data.author = article.author
      this._data.article = article.content
    } else {
      util.warningMessage({
        message: '获取失败'
      })
    }
  }
}
</script>
<style scoped lang='scss'>
.article {
  padding: 0.1rem;
  .title {
    margin: 0.1rem 0;
    .content {
      font-weight: 900;
      padding: 0.2rem 0;
    }
    .createTime,.author{
      margin: .1rem;
    }
    .createTime{
      float: right;
    }
    .author{
      float: left;
    }
  }
  .content{
    clear: both;
  }
}
</style>
