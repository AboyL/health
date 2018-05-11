/*
 * @Author: L
 * @Date: 2018-04-25 23:31:45
 * @Last Modified by: L
 * @Last Modified time: 2018-05-11 16:47:54
 */
<template>
  <div class="container">
    <Header :title="'挂号'"></Header>
    <doctor-list :listConfig="listConfig"
                 @click-doctor="registration"
                 v-if="registrationData.number===-1">
    </doctor-list>
    <div v-if="registrationData.number>-1"
         class="hasRegistrationData">
      <div>已挂号</div>
      <div>{{registrationData.time}}</div>
      <div>{{registrationData.range}}</div>
      <div>{{registrationData.number}}</div>
      <div class="cancel">取消挂号
      </div>
    </div>
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
  computed: {
    registrationData: {
      get () {
        return {
          number: this.$store.state.registerNumber,
          time: this.$store.state.registerTime,
          range: this.$store.state.registerRange
        }
      },
      set (val) {
        this.$store.commit('setRegisterNumber', this.number)
        this.$store.commit('setRegisterTime', this.time)
        this.$store.commit('setRegisterRange', this.range)
      }
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
      }).then((res) => {
        console.log(res)
        if (res.status) {
          this.showHospitalRegistrationSheet = false
          this.$store.commit('setRegisterNumber', res.data.registration.number)
          this.$store.commit('setRegisterTime', res.data.registration.time)
          this.$store.commit('setRegisterRange', res.data.registration.range)
        }
      })
      console.log('submit')
    },
    cancel () {
      this.showHospitalRegistrationSheet = false
    }
  },
  mounted () {
    console.log('state')
    console.log(this.$store.state)
  }
}
</script>
<style scoped lang='scss'>
.hasRegistrationData {
  > div {
    $line: 0.15rem;
    padding: 0.2rem;
    text-align: center;
    height: $line;
    line-height: $line;
    font-size: 0.3rem;
    &.cancel {
      display: block;
      padding: .3rem;
      margin: 0.3rem auto;
      width: 3rem;
      height: $line;
      line-height: $line;
      background: orange;
      border-radius: 10%;
      color: white;
    }
  }
}
</style>
