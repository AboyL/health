import knowledgeSymptomQuery from 'views/knowledge/knowledgeSymptomQuery'
import knowledgeMedicalKnowledge from 'views/knowledge/knowledgeMedicalKnowledge'
import knowledgeSymptomDetail from 'views/knowledge/knowledgeSymptomDetail'
import knowledgeArticleList from 'views/knowledge/knowledgeArticleList'
import knowledgeArticle from 'views/knowledge/knowledgeArticle'

export default [
  {
    path: '/knowledgeSymptomQuery',
    name: 'knowledgeSymptomQuery',
    component: knowledgeSymptomQuery
  },
  {
    path: '/knowledgeMedicalKnowledge',
    name: 'knowledgeMedicalKnowledge',
    component: knowledgeMedicalKnowledge
  },
  {
    path: '/knowledgeSymptomDetail/:key',
    name: 'knowledgeSymptomDetail',
    component: knowledgeSymptomDetail
  },
  {
    path: '/knowledgeArticleList/:key',
    name: 'knowledgeArticleList',
    component: knowledgeArticleList
  },
  {
    path: '/knowledgeArticle/:key/:index',
    name: 'knowledgeArticle',
    component: knowledgeArticle
  }
]
