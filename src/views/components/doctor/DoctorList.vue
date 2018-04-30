<template>
  <div class="container">
    <doctor-item v-for="item of doctorList"
                 :key="item.id"
                 :item="item"
                 @click-doctor='clickDoctor'>
    </doctor-item>
  </div>
</template>
<script>
import DoctorItem from './DoctorItem'
import hospitalService from 'service/hospital.service.js'
import util from 'util'

export default {
  name: 'DoctorList',
  components: {
    DoctorItem
  },
  props: {
    listConfig: Object
  },
  data () {
    return {
      doctorList: []
    }
  },
  computed: {
    subject () {
      return this.$store.state.subject
    },
    alreadyChooseSuject: function () {
      return this.$store.state.subject.length >= 2
    }
  },
  methods: {
    clickDoctor (doctorId) {
      this.$emit('click-doctor', doctorId)
    },
    getDoctors () {
      if (this.alreadyChooseSuject) {
        hospitalService.getDoctors(this.$store.state.subject)
          .then((res) => {
            if (res.status) {
              this.doctorList = res.data
              this.doctorList.forEach((value, index) => {
                this.doctorList[index].type = this.listConfig.type
                this.doctorList[index].operateContent = this.listConfig.operateContent
              })
            } else {
              util.warningMessage({
                message: '加载医生信息失败'
              })
            }
          })
      }
    }
  },
  mounted () {
    this.getDoctors()
  },
  watch: {
    subject () {
      this.getDoctors()
    }
  }
}
</script>
<style scoped lang='scss'>

</style>
