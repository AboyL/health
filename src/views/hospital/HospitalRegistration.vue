/*
 * @Author: L
 * @Date: 2018-04-25 23:31:45
 * @Last Modified by: L
 * @Last Modified time: 2018-04-30 16:54:53
 */
<template>
  <div class="container">
    <Header :title="'挂号'"></Header>
    <doctor-list :listConfig="listConfig"
                 @click-doctor="registration"></doctor-list>
  </div>
</template>
<script>
import SingleLineContainer from 'components/layout/SingleLineContainer.vue'
import Header from 'components/layout/Header.vue'
import DoctorList from 'components/doctor/DoctorList.vue'

import util from 'util'
export default {
  name: 'HospitalRegistration',
  components: {
    Header,
    SingleLineContainer,
    DoctorList
  },
  data () {
    return {
      listConfig: {
        type: 'registration'
      }
    }
  },
  methods: {
    registration (data) {
      console.log(data)
      if (data.state) {
        console.log('有号')
      } else {
        util.warningMessage({
          message: '所选医生已无号'
        })
      }
    }
  }
}
</script>
<style scoped lang='scss'>

</style>
