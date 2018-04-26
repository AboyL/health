/*
 * @Author: L
 * @Date: 2018-04-25 23:31:51
 * @Last Modified by: L
 * @Last Modified time: 2018-04-26 18:45:15
 */
<template>
  <div class="tab-doctor">
    <subject-cascader></subject-cascader>
    <doctor-list v-if="type==='DoctorList'"
                 :list="doctorList"></doctor-list>
    <empty v-if="type==='Empty'"></empty>
  </div>
</template>
<script>
import SubjectCascader from 'components/cascader/SubjectCascader.vue'
import Empty from 'components/layout/Empty.vue'
import DoctorList from 'components/doctor/DoctorList.vue'

import hospitalService from 'service/hospital.service.js'

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
    subject () {
      return this.$store.state.subject
    },
    type: function () {
      console.log('type')
      return this.alreadyChooseSuject ? 'DoctorList' : 'Empty'
    }
  },
  watch: {
    subject () {
      console.log('object')
      if (this.alreadyChooseSuject) {
        hospitalService.getDoctors(this.$store.state.subject)
          .then((res) => {
            console.log(res)
            this.doctorList = res
          })
      }
    }
  }
}
</script>
<style scoped lang='scss'>
.tab-doctor {
  height: 100%;
}
</style>
