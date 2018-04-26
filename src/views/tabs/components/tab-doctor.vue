/*
 * @Author: L
 * @Date: 2018-04-25 23:31:51
 * @Last Modified by: L
 * @Last Modified time: 2018-04-26 20:04:25
 */
<template>
  <div class="tab-doctor">
    <subject-cascader></subject-cascader>
    <doctor-list v-if="type==='DoctorList'"></doctor-list>
    <empty v-if="type==='Empty'"></empty>
  </div>
</template>
<script>
import SubjectCascader from 'components/cascader/SubjectCascader.vue'
import Empty from 'components/layout/Empty.vue'
import DoctorList from 'components/doctor/DoctorList.vue'

export default {
  name: 'TabDoctor',
  components: {
    SubjectCascader,
    Empty,
    DoctorList
  },
  data () {
    return {
      doctorList: []
    }
  },
  computed: {
    alreadyChooseSuject: function () {
      return this.$store.state.subject.length >= 2
    },
    type: function () {
      console.log('type')
      return this.alreadyChooseSuject ? 'DoctorList' : 'Empty'
    }
  }
}
</script>
<style scoped lang='scss'>
.tab-doctor {
  height: 100%;
}
</style>
