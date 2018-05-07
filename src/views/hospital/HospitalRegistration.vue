/*
 * @Author: L
 * @Date: 2018-04-25 23:31:45
 * @Last Modified by: L
 * @Last Modified time: 2018-05-07 23:32:45
 */
<template>
  <div class="container">
    <Header :title="'挂号'"></Header>
    <doctor-list :listConfig="listConfig"
                 @click-doctor="registration">
    </doctor-list>
    <hospital-registration-sheet v-if="showHospitalRegistrationSheet"
                                 @submit='submit'
                                 @cancel='cancel'
                                 :doctorId='doctorId'>
    </hospital-registration-sheet>
  </div>
</template>
<script>
import SingleLineContainer from 'components/layout/SingleLineContainer.vue'
import Header from 'components/layout/Header.vue'
import DoctorList from 'components/doctor/DoctorList.vue'

import HospitalRegistrationSheet from './components/hospitalRegistrationSheet'

import HospitalService from 'service/hospital.service.js'
import util from 'util'
export default {
  name: 'HospitalRegistration',
  components: {
    Header,
    SingleLineContainer,
    DoctorList,
    HospitalRegistrationSheet
  },
  data () {
    return {
      listConfig: {
        type: 'registration'
      },
      showHospitalRegistrationSheet: false,
      doctorId: ''
    }
  },
  methods: {
    registration (data) {
      console.log(data)
      if (data.state) {
        console.log('有号')
        this.switchHospitalRegistrationSheet(data.id)
      } else {
        util.warningMessage({
          message: '所选医生已无号'
        })
      }
    },
    switchHospitalRegistrationSheet (doctorId) {
      this.doctorId = doctorId
      this.showHospitalRegistrationSheet = !this.showHospitalRegistrationSheet
    },
    submit (index) {
      HospitalService.submitRegistration({
        userId: this.$store.state.token,
        doctorId: this.doctorId,
        index
      })
      console.log('submit')
    },
    cancel () {
      this.showHospitalRegistrationSheet = false
    }
  }
}
</script>
<style scoped lang='scss'>

</style>
