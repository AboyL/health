/*
 * @Author: L
 * @Date: 2018-04-25 23:31:54
 * @Last Modified by: L
 * @Last Modified time: 2018-05-01 10:21:13
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
          content: '我的病历'
        }
      ]
    }
  },
  methods: {
    goHospitalRegistration () {
      if (this.$store.state.subject.length >= 2) {
        this.$router.push({name: 'HospitalRegistration'})
      } else {
        util.warningMessage({
          message: '请选择要就诊的科室'
        })
      }
    },
    goCounsel () {
      this.$router.push({name: 'HospitalCounsel'})
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
