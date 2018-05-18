import knowledgeSymptomQuery from 'views/knowledge/knowledgeSymptomQuery'
import knowledgeMedicalKnowledge from 'views/knowledge/knowledgeMedicalKnowledge'
import knowledgeSymptomDetail from 'views/knowledge/knowledgeSymptomDetail'

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
  }
]
