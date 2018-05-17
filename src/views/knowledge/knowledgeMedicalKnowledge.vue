<template>
  <div  class="container">
    <Header :title="headerTitle">
    </Header>
    医学小知识
  </div>
</template>
<script>
import Header from 'components/layout/Header.vue'

export default {
  name: 'knowledgeMedicalKnowledge',
  components: {
    Header
  },
  data () {
    return {
      headerTitle: '医学小知识'
    }
  }
}
</script>
<style scoped lang='scss'>
</style>
