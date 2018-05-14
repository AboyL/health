/*
 * @Author: L
 * @Date: 2018-04-25 23:31:45
 * @Last Modified by: L
 * @Last Modified time: 2018-05-14 12:17:16
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
      <div>{{registrationData.doctorName}}</div>
      <div>{{registrationData.subjectName}}</div>
      <div class="cancel"
           @click="clearRegistrationSheet">取消挂号
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
      doctorId: '',
      registrationData: {
        number: -1,
        range: -1,
        time: '',
        doctorName: '',
        doctorId: '',
        subjectName: ''
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
      let subject = this.$store.state.subject
      HospitalService.submitRegistration({
        userId: this.$store.state.token,
        doctorId: this.doctorId,
        index,
        subject
      }).then((res) => {
        console.log(res)
        if (res.status) {
          this.setUserInfo()
        }
      })
      console.log('submit')
    },
    cancel () {
      this.showHospitalRegistrationSheet = false
    },
    clearRegistrationData () {
      this.registrationData = {
        number: -1,
        range: -1,
        time: '',
        doctorName: '',
        doctorId: '',
        subjectName: ''
      }
    },
    clearRegistrationSheet () {
      console.log('取消挂号')
      HospitalService.clearRegistrationSheet({
        doctorId: this.registrationData.doctorId,
        userId: this.$store.state.token,
        time: this.registrationData.time,
        range: this.registrationData.range
      }).then((res) => {
        console.log(res)
        if (res.status) {
          // 清除数据
          this.clearRegistrationData()
        }
      })
    },
    async setUserInfo () {
      // 获取用户信息
      util.getUserInfo({
        username: this.$store.state.username
      }).then(async (res) => {
        console.log(res)
        if (res.data.userInfo.registerNumber) {
          let userInfo = res.data.userInfo
          this.showHospitalRegistrationSheet = false
          this.registrationData.number = userInfo.registerNumber
          this.registrationData.range = userInfo.registerRange
          this.registrationData.time = userInfo.registerTime
          let doctor = await HospitalService.getADoctor({ doctorId: userInfo.registerDoctorId })
          this.registrationData.doctorName = doctor.data.name
          this.registrationData.doctorId = doctor.data._id
          this.$store.state.subjects.map((data1, index) => {
            if (data1.value === userInfo.registerSubject[0]) {
              this.registrationData.subjectName = data1.label
              data1.children.map((data2, index2) => {
                if (data2.value === userInfo.registerSubject[1]) {
                  this.registrationData.subjectName = this.registrationData.subjectName + '/' + data2.label
                }
              })
            }
          })
          console.log(this.$store.state.subjects)
        }
        console.log(this.registrationData.number)
      })
    }
  },
  mounted () {
    this.setUserInfo()
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
      padding: 0.3rem;
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
