/*
 * @Author: L
 * @Date: 2018-04-25 23:31:51
 * @Last Modified by: L
 * @Last Modified time: 2018-05-06 22:03:14
 */
<template>
  <div class="tab-doctor">
    <doctor-counsel v-if="showCounsel"
                    @cancel="cancel"
                    @submit="submit"></doctor-counsel>
    <subject-cascader></subject-cascader>
    <doctor-list v-if="type==='DoctorList'"
                 :listConfig="listConfig"
                 @click-doctor="clickDoctor">
    </doctor-list>
    <empty v-if="type==='Empty'"></empty>
  </div>
</template>
<script>
import SubjectCascader from 'components/cascader/SubjectCascader.vue'
import Empty from 'components/layout/Empty.vue'
import DoctorList from 'components/doctor/DoctorList.vue'
import DoctorCounsel from 'components/doctor/DoctorCounsel.vue'
import hospitalService from 'service/hospital.service.js'
import util from 'util'

export default {
  name: 'TabDoctor',
  components: {
    SubjectCascader,
    Empty,
    DoctorList,
    DoctorCounsel
  },
  data () {
    return {
      doctorList: [],
      showCounsel: false,
      doctorId: '',
      listConfig: {
        type: 'counsel',
        operateContent: '咨询医生'
      }
    }
  },
  methods: {
    clickDoctor (data) {
      this.showCounsel = true
      this.doctorId = data.id
      console.log(data)
    },
    cancel () {
      this.showCounsel = false
    },
    submit (content) {
      this.showCounsel = false
      hospitalService.submitCounsel({
        doctorId: this.doctorId,
        userId: this.$store.state.token,
        question: content
      }).then((res) => {
        if (res.status) {
          util.successMessage({
            message: '提交成功'
          })
        } else {
          util.warningMessage({
            message: '提交失败'
          })
        }
      })
    }
  },
  computed: {
    alreadyChooseSuject: function () {
      return this.$store.state.subject.length >= 2
    },
    type: function () {
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
