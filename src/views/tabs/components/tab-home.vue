/*
 * @Author: L
 * @Date: 2018-04-25 23:31:54
 * @Last Modified by: L
 * @Last Modified time: 2018-05-21 16:00:13
 */
<template>
  <div class="tab-home">
    <subject-cascader class="cascader"></subject-cascader>
    <dot-item-list :itemList="itemList"></dot-item-list>
  </div>
</template>
<script>
import SubjectCascader from 'components/cascader/SubjectCascader.vue'
import DotItemList from 'components/layout/DotItemList.vue'
import util from 'util'

export default {
  name: 'TabUser',
  components: {
    SubjectCascader,
    DotItemList
  },
  data () {
    // var _this = this
    return {
      itemList: [
        {
          key: 'subject_registration',
          content: '挂号',
          cb: this.goHospitalRegistration
        },
        {
          key: 'my_advisory',
          content: '我的咨询',
          cb: this.goCounsel
        },
        {
          key: 'medical_history',
          content: '我的病历',
          cb: this.goMedicalHistory
        },
        {
          key: 'symptomQuery',
          content: '症状查询',
          cb: this.goSymptomQuery
        },
        {
          key: 'medicalKnowledge',
          content: '医学常识',
          cb: this.goMedicalKnowledge
        },
        {
          key: 'hospitalCheckExplain',
          content: '检查解读',
          cb: this.goHospitalCheckExplain
        },
        {
          key: 'hospitalPhysicalExamination',
          content: '健康体检',
          cb: this.goHospitalPhysicalExamination
        },
        {
          key: 'userPhysicalExamination',
          content: '我的体检',
          cb: this.goUserPhysicalExamination
        }
      ]
    }
  },
  methods: {
    goHospitalRegistration () {
      if (this.$store.state.subject.length >= 2) {
        this.$router.push({ name: 'HospitalRegistration' })
      } else {
        util.warningMessage({
          message: '请选择要就诊的科室'
        })
      }
    },
    goCounsel () {
      this.$router.push({ name: 'HospitalCounsel' })
    },
    goMedicalHistory () {
      this.$router.push({ name: 'hospitalMedicalHistory' })
    },
    goSymptomQuery () {
      this.$router.push({ name: 'knowledgeSymptomQuery' })
    },
    goMedicalKnowledge () {
      this.$router.push({ name: 'knowledgeMedicalKnowledge' })
    },
    goHospitalCheckExplain () {
      this.$router.push({ name: 'hospitalCheckExplain' })
    },
    goHospitalPhysicalExamination () {
      this.$router.push({ name: 'hospitalPhysicalExamination' })
    },
    goUserPhysicalExamination () {
      this.$router.push({ name: 'userPhysicalExamination' })
    }
  }
}
</script>
<style scoped lang='scss'>
.tab-home {
  height: 100%;
  .cascader {
    margin-bottom: 0.7rem;
  }
}
</style>
