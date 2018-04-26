/*
 * @Author: L
 * @Date: 2018-04-25 23:31:51
 * @Last Modified by:   L
 * @Last Modified time: 2018-04-25 23:31:51
 */
<template>
  <div class="tab-doctor">
    <subject-cascader></subject-cascader>
    <component :is="type"></component>
  </div>
</template>
<script>
import SubjectCascader from 'components/cascader/SubjectCascader.vue'
import Empty from 'components/layout/Empty.vue'
export default {
  name: 'TabDoctor',
  components: {
    SubjectCascader,
    Empty
  },
  computed: {
    alreadyChooseSuject: function () {
      return this.$store.state.subject.length >= 2
    },
    type: function () {
      console.log('type')
      return this.alreadyChooseSuject ? 'div' : 'Empty'
    }
  }
}
</script>
<style scoped lang='scss'>
.tab-doctor {
  height: 100%;
}
</style>
