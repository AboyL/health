<template>
  <div class="container">
    <Header :title="headerTitle">
    </Header>
    <div class="list">
      <!-- <div class="item"
           v-for="item of list"
           :key="item.key">
        {{item.name}}
      </div> -->
    <label-list :LabelList="list" @click="goKnowledge"></label-list>
    </div>
  </div>
</template>
<script>
import Header from 'components/layout/Header.vue'
import LabelList from 'components/layout/LabelList.vue'

export default {
  name: 'knowledgeMedicalKnowledge',
  components: {
    Header,
    LabelList
  },
  data () {
    return {
      headerTitle: '医学小知识',
      list: [
        {
          label: '眼科',
          key: 'eye'
        }, {
          label: '儿科',
          key: 'child'
        }, {
          label: '耳科',
          key: 'ear'
        }
      ]
    }
  },
  methods: {
    goKnowledge (key) {
      console.log(key)
    }
  }
}
</script>
<style scoped lang='scss'>
</style>
